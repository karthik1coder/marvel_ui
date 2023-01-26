const router = require("express").Router();
const controller=require("../controllers/controller");

router.get("/",controller.SignIn);

module.exports = router;