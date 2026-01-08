import re
from pathlib import Path
from docx import Document

ROOT = Path(__file__).resolve().parents[2]

DOCS = ROOT / "docs"
OUT_CONTENT = ROOT / "src" / "content"
OUT_CONTENT.mkdir(parents=True, exist_ok=True)

def read_docx(path: Path):
    doc = Document(str(path))
    return [p.text.strip() for p in doc.paragraphs if p.text.strip()]

def slugify(s: str):
    s = s.lower()
    s = re.sub(r"\(.*?\)", "", s)
    s = s.replace("&", "and")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s or "item"

def esc(s: str):
    return s.replace("\\", "\\\\").replace('"', '\\"')

def parse_dot_sections(lines):
    # matches: "1. Heading"
    sections = []
    cur = None
    for line in lines:
        m = re.match(r"^(\d+(?:\.\d+)*)\.\s+(.+)$", line)
        if m:
            if cur:
                sections.append(cur)
            cur = {"num": m.group(1), "heading": m.group(2).strip(), "items": []}
        else:
            if cur:
                cur["items"].append(line.strip())
    if cur:
        sections.append(cur)
    return sections

def split_numbered(lines):
    # matches: "1. Title" (for trust docs)
    sections = []
    cur = None
    for line in lines:
        m = re.match(r"^(\d+)\.\s+(.+)$", line)
        if m:
            if cur:
                sections.append(cur)
            cur = {"heading": m.group(2).strip(), "lines": []}
        else:
            if cur:
                cur["lines"].append(line.strip())
    if cur:
        sections.append(cur)
    return sections

def parse_arch_layers(lines):
    # matches: "1.1 Layer Name"
    layers = []
    cur = None
    for line in lines:
        m = re.match(r"^(\d\.\d)\s+(.+)$", line)
        if m:
            if cur:
                layers.append(cur)
            cur = {"code": m.group(1), "heading": m.group(2).strip(), "items": []}
        else:
            if cur:
                cur["items"].append(line.strip())
    if cur:
        layers.append(cur)
    return layers

def parse_usecases(lines):
    sectors = []
    cur = None
    cur_sub = None
    for line in lines:
        m_sector = re.match(r"^(\d+)\.\s+(.+)$", line)
        if m_sector:
            if cur:
                if cur_sub:
                    cur["sections"].append(cur_sub)
                    cur_sub = None
                sectors.append(cur)
            title = m_sector.group(2).strip()
            cur = {"slug": slugify(title), "title": title, "sections": []}
            continue

        m_sub = re.match(r"^(\d+)\.(\d+)\s+(.+)$", line)
        if m_sub and cur:
            if cur_sub:
                cur["sections"].append(cur_sub)
            cur_sub = {"heading": m_sub.group(3).strip(), "items": []}
            continue

        if cur_sub is not None and line.strip():
            cur_sub["items"].append(line.strip())

    if cur:
        if cur_sub:
            cur["sections"].append(cur_sub)
        sectors.append(cur)
    return sectors

def write_ts(path: Path, content: str):
    path.write_text(content, encoding="utf-8")
    print("Wrote:", path)

def build_site_pages():
    # Load docs
    pa = read_docx(DOCS / "Problem Analysis (Global + India).docx")
    cs = read_docx(DOCS / "Why Current Systems Fail.docx")
    arch = read_docx(DOCS / "Face-Based Identity Architecture.docx")
    ns = read_docx(DOCS / "Why FacePass Travel Is NOT Surveillance.docx")
    hm = read_docx(DOCS / "Why Hackers Cannot Misuse FacePass Travel.docx")
    vision = read_docx(DOCS / "Long-Term Future Vision (10–20 Years).docx")
    wf = read_docx(DOCS / "Workforce Requirement (Department & Profile Wise).docx")
    imp = read_docx(DOCS / "Important .docx")

    # Problem page
    pa_main = parse_dot_sections(pa)
    cs_main = parse_dot_sections(cs)

    # Technology page
    layers = parse_arch_layers(arch)

    # Trust pages
    ns_sec = split_numbered(ns)
    hm_sec = split_numbered(hm)

    # Vision: phases by "Phase X (...)"
    phases = []
    cur = None
    for line in vision:
        m = re.match(r"^Phase\s+(\d+)\s+\(([^)]+)\):\s*(.+)$", line)
        if m:
            if cur:
                phases.append(cur)
            cur = {"phase": int(m.group(1)), "period": m.group(2).strip(), "title": m.group(3).strip(), "items": []}
        else:
            if cur:
                cur["items"].append(line)
    if cur:
        phases.append(cur)

    def section_text(id_, heading, text):
        return f'    {{ id: "{esc(id_)}", heading: "{esc(heading)}", type: "text", text: "{esc(text)}" }},\n'

    def section_bullets(id_, heading, items):
        items_ts = ",\n".join([f'        "{esc(i)}"' for i in items if i])
        return (
            f'    {{ id: "{esc(id_)}", heading: "{esc(heading)}", type: "bullets", items: [\n'
            f"{items_ts}\n"
            f"      ] }},\n"
        )

    ts = []
    ts.append("// AUTO-GENERATED. DO NOT EDIT.\n")
    ts.append('export type SectionBlock =\n'
              '  | { id: string; heading: string; type: "text"; text: string }\n'
              '  | { id: string; heading: string; type: "bullets"; items: string[] };\n\n'
              'export type DocPageContent = { title: string; description: string; sections: SectionBlock[] };\n\n')

    # PROBLEM
    ts.append('export const problemPage: DocPageContent = {\n')
    ts.append('  title: "Why current systems fail",\n')
    ts.append('  description: "Global + India problem analysis and structural failures of ticket/QR/card/app-based identity.",\n')
    ts.append('  sections: [\n')
    if len(pa) >= 3:
        ts.append(section_text("context", "Project Context: FacePass Travel", pa[2]))
    for sec in pa_main:
        ts.append(section_bullets(f"pa-{sec['num']}", sec["heading"], sec["items"]))
    ts.append(section_text("csf-intro", "Why Current Systems Fail", "The core structural failures of ticket/QR/card/app-based travel identity systems:"))
    for sec in cs_main:
        ts.append(section_bullets(f"csf-{sec['num']}", sec["heading"], sec["items"]))
    ts.append("  ]\n};\n\n")

    # TECHNOLOGY
    ts.append('export const technologyPage: DocPageContent = {\n')
    ts.append('  title: "Technology & Architecture",\n')
    ts.append('  description: "A privacy-first, consent-led face-based identity architecture linking travel entitlements to checkpoint verification.",\n')
    ts.append('  sections: [\n')
    if len(arch) >= 4:
        ts.append(section_text("vision", "Architecture vision", " ".join(arch[2:4])))
    for layer in layers:
        ts.append(section_bullets(slugify(layer["heading"]), layer["heading"], layer["items"]))
    # flow/advantages/principle (best effort)
    flow = [l for l in arch if l.startswith("Traveler enrolls") or l.startswith("Booking is") or l.startswith("Traveler arrives") or l.startswith("Face is") or l.startswith("System validates") or l.startswith("Access is") or l.startswith("Face =")]
    if flow:
        ts.append(section_bullets("flow", "High-level identity flow", flow))
    adv = [l for l in arch if l.startswith("No dependency") or l.startswith("Frictionless") or l.startswith("Highly secure") or l.startswith("Scales") or l.startswith("Future-ready")]
    if adv:
        ts.append(section_bullets("advantages", "Architectural advantages", adv))
    principle = [l for l in arch if "Travel systems should" in l or "foundational identity layer" in l]
    if principle:
        ts.append(section_text("principle", "Core architectural principle", " ".join(principle)))
    ts.append("  ]\n};\n\n")

    # NOT SURVEILLANCE
    ts.append('export const notSurveillancePage: DocPageContent = {\n')
    ts.append('  title: "Why this is not surveillance",\n')
    ts.append('  description: "Checkpoint-based, consent-led identity verification — purpose-bound to access, not monitoring.",\n')
    ts.append('  sections: [\n')
    if len(ns) >= 5:
        ts.append(section_text("core", "Core distinction", " ".join(ns[2:5])))
    for s in ns_sec:
        ts.append(section_bullets(slugify(s["heading"]), s["heading"], s["lines"]))
    ts.append("  ]\n};\n\n")

    # ANTI MISUSE
    ts.append('export const antiMisusePage: DocPageContent = {\n')
    ts.append('  title: "Why hackers cannot misuse this",\n')
    ts.append('  description: "No stealable credential, encrypted templates, liveness and auditability — designed to reduce fraud and misuse.",\n')
    ts.append('  sections: [\n')
    if len(hm) >= 3:
        ts.append(section_text("premise", "Security premise", " ".join(hm[1:3])))
    for s in hm_sec:
        ts.append(section_bullets(slugify(s["heading"]), s["heading"], s["lines"]))
    ts.append("  ]\n};\n\n")

    # VISION
    ts.append('export const visionPage: DocPageContent = {\n')
    ts.append('  title: "Long-term future vision (10–20 years)",\n')
    ts.append('  description: "How the platform evolves from pilots to a rights-respecting mobility identity layer over 10–20 years.",\n')
    ts.append('  sections: [\n')
    if len(vision) >= 6:
        ts.append(section_text("headline", "Headline", vision[1]))
        ts.append(section_text("vision-statement", "Vision statement", " ".join(vision[3:6])))
    for ph in phases:
        ts.append(section_bullets(f"phase-{ph['phase']}", f"Phase {ph['phase']} ({ph['period']}): {ph['title']}", ph["items"]))
    # add “What does not change” and “Ultimate principle” if present
    if "What Does NOT Change" in vision:
        i = vision.index("What Does NOT Change")
        ts.append(section_bullets("non-negotiables", "What does not change", vision[i:i+12]))
    if "Ultimate Principle" in vision:
        i = vision.index("Ultimate Principle")
        ts.append(section_bullets("ultimate", "Ultimate principle", vision[i:i+4]))
    ts.append("  ]\n};\n\n")

    # CAREERS (dept totals + modules best effort)
    wf_depts = parse_dot_sections(wf)
    ts.append('export const careersPage: DocPageContent = {\n')
    ts.append('  title: "Careers & Workforce Plan",\n')
    ts.append('  description: "Department-wise workforce requirement and training modules for scaled deployments.",\n')
    ts.append('  sections: [\n')
    dept_items = []
    for d in wf_depts:
        if d["items"]:
            dept_items.append(f"{d['heading']}: {d['items'][0]}")
    if dept_items:
        ts.append(section_bullets("departments", "Department-wise requirement", dept_items))
    # training modules
    modules = []
    curm = None
    for line in wf:
        m = re.match(r"^Module\s+(\d+):\s*(.+)$", line)
        if m:
            if curm:
                modules.append(curm)
            curm = {"n": int(m.group(1)), "t": m.group(2).strip(), "items": []}
        else:
            if curm:
                curm["items"].append(line)
    if curm:
        modules.append(curm)
    for m in modules:
        ts.append(section_bullets(f"module-{m['n']}", f"Training Module {m['n']}: {m['t']}", m["items"]))
    ts.append("  ]\n};\n\n")

    # FAQ from Important doc
    ts.append('export const faqPage: DocPageContent = {\n')
    ts.append('  title: "FAQ",\n')
    ts.append('  description: "Common questions and clarity notes consolidated from internal notes.",\n')
    ts.append('  sections: [\n')
    ts.append(section_bullets("faq-notes", "Key notes", imp))
    ts.append("  ]\n};\n\n")

    write_ts(OUT_CONTENT / "sitePages.generated.ts", "".join(ts))

def build_usecases():
    uc = read_docx(DOCS / "SECTOR-WISE USE CASE.docx")
    sectors = parse_usecases(uc)

    lines = []
    lines.append("// AUTO-GENERATED. DO NOT EDIT.\n")
    lines.append("export type UseCaseSection = { heading: string; items: string[] };\n")
    lines.append("export type UseCase = { slug: string; title: string; sections: UseCaseSection[] };\n\n")
    lines.append("export const useCases: UseCase[] = [\n")
    for s in sectors:
        lines.append(f'  {{ slug: "{esc(s["slug"])}", title: "{esc(s["title"])}", sections: [\n')
        for sec in s["sections"]:
            items_ts = ",\n".join([f'        "{esc(i)}"' for i in sec["items"]])
            lines.append(f'      {{ heading: "{esc(sec["heading"])}", items: [\n{items_ts}\n      ] }},\n')
        lines.append("    ] },\n")
    lines.append("];\n")
    write_ts(OUT_CONTENT / "useCases.generated.ts", "".join(lines))

if __name__ == "__main__":
    if not DOCS.exists():
        raise SystemExit(f"Missing docs folder: {DOCS}")
    build_site_pages()
    build_usecases()
    print("Done.")
