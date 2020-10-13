const express = require("express");
const router = express.Router();
const controller = require("../Controllers");

// router.get('/verify-email', controller.AuthController.verifyEmail);

router.post("/create", controller.officeCreate.create);
router.get("/view", controller.officeCreate.officeView);
router.post("/create/packet", controller.officeCreatePacket.create);

// router.post('/register-verify', controller.AuthController.verifyRegister);
// router.post('/login', controller.AuthController.login);
// router.post('/social-login', controller.AuthController.socialLogin);
// router.post('/logout', authentication, controller.AuthController.logout);

module.exports = router;
