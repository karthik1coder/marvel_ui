const router = require("express").Router();
const controller=require("../controllers/controller");

router.post("/",controller.Search);

module.exports = router;