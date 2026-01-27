const router = require("express").Router();
const { submitPartnership } = require("../controllers/partnership.controller");

router.post("/submit", submitPartnership);

module.exports = router;
