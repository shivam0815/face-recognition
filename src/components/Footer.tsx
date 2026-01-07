import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-extrabold">Face-Based Travel Technology</div>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
  S-PassX 360 is a privacy-first, consent-based face identity platform
  enabling ticketless access across travel, hospitality, and smart infrastructure.
</p>

        </div>

        <div>
          <div className="font-bold">Company</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link className="text-slate-600 hover:text-slate-900" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 hover:text-slate-900"
                to="/technology"
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 hover:text-slate-900"
                to="/investors"
              >
                Investors
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold">Solutions</div>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <Link
                className="text-slate-600 hover:text-slate-900"
                to="/use-cases#airports"
              >
                Airports & Airlines
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 hover:text-slate-900"
                to="/use-cases#rail"
              >
                Railways & Metro
              </Link>
            </li>
            <li>
              <Link
                className="text-slate-600 hover:text-slate-900"
                to="/use-cases#hotels"
              >
                Hotels
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold">Contact</div>
          <p className="mt-2 text-sm text-slate-600">
            Pilot partnerships and demos:
          </p>
          <Link
            to="/partnership#form"
            className="mt-3 inline-block text-sm font-semibold text-slate-900 hover:underline"
          >
            Submit partnership request →
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Face Travel. All rights reserved.</span>
          <span>Designed for privacy-first, consent-based deployments.</span>
        </div>
      </div>
    </footer>
  );
}
