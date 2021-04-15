const express = require('express');
const router = express.Router();

const controller = require("../controllers/Customer/CustomerController")

router.get("/",controller.get)
router.post("/register",controller.register)

module.exports = router;