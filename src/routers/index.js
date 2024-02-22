const express = require("express");
const router = express.Router();
router.use("/v1/api/app1", require("../app1/routes"));
module.exports = router;