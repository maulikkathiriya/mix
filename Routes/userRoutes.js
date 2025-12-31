const express = require("express");
const router = express.Router();
const { 
    addUser, 
    patchUser, 
    getUsers, 
    deleteUser, 
    getUser, 
    updateUser 
} = require("../controllers/userController");

const validate = require("../Middleware/validate");
const { addUserValidation, updateUserValidation, idValidation } = require("../Validations/userValidation");

// GET all users
router.get("/getusers", getUsers);

// CREATE a single user with validation
router.post("/adduser", validate(addUserValidation), addUser);

// GET a single user by ID with ID validation
router.get("/getuser/:id", validate(idValidation, "params"), getUser);

// UPDATE full user (PUT) with validation
router.put("/updateuser/:id", validate(updateUserValidation), updateUser);

// UPDATE partial user (PATCH)
router.patch("/patchuser/:id", patchUser);

// DELETE a user with ID validation
router.delete("/deleteusers/:id", validate(idValidation, "params"), deleteUser);

module.exports = router;
