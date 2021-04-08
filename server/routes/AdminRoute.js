const express = require('express');
const router = express.Router();

const controller = require("../controllers/Admin/AdminController")

router.get("/",controller.get)
router.post("/",controller.postData)
//router.get("/",controller.getData)

module.exports = router;