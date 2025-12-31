const express = require("express");
const router = express.Router();
const {   addUser,  patchUser,    getUsers,   deleteUser,   getUser, updateUser} = require("../controllers/userController");

const validate = require("../Middleware/validate"); // Correct import
const { addUserValidation } = require("../Validations/userValidation");

// GET all users
router.get("/getusers", getUsers);

// CREATE a single user with validation
router.post("/adduser", validate(addUserValidation), addUser);

// GET a single user by ID
router.get("/getuser/:id", getUser);

// UPDATE full user (PUT) with validation
router.put("/updateuser/:id", validate(addUserValidation), updateUser);

// UPDATE partial user (PATCH)
router.patch("/patchuser/:id", patchUser);

// DELETE a user
router.delete("/deleteusers/:id", deleteUser);

module.exports = router;
