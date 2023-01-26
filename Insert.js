const router = require("express").Router();
const controller=require("../controllers/controller");

router.post("/",controller.Insert);

module.exports = router;