require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || true }));
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/partnership", require("./routes/partnership.routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API running on ${PORT}`));
