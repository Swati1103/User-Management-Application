//const { application } = require("express");
const express = require("express");
const router = express.Router();
const authcontrollers = require("../Controllers/auth-controller");
const {signupSchema, loginSchema} = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// router.get("/", (req,res) => {
//     res.status(200).send("Welcome to world best mern series by thapa technical using router");
// });

//another way we can use chaining here
router.route("/").get(authcontrollers.home);

router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema), authcontrollers.login);

module.exports = router;