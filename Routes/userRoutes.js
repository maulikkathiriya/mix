const express = require("express");
const router = express.Router();

const {
  addUser,
  // postUser,
  getUser,
  getUsers,
//   updateUser,
  patchUser,
  deleteUser
} = require("../controllers/userController");

const validate  = require("../Middlewares/validate");
const { addUserValidation } = require("../Validations/userValidation");

// GET all users
router.get("/getusers", getUsers);

// CREATE user
// router.post("/adduser", validate(addUserValidation), postUser);

router.post("/adduser", validate(addUserValidation), addUser);

// GET single user
router.get("/getuser/:id", getUser);

// UPDATE user (PUT)
// router.put("/updateuser/:id", updateUser);

// PATCH user
router.patch("/patchuser/:id", patchUser);

// DELETE user
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
