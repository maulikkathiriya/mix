const express = require("express");
const router = express.Router();
const { 
    putUser, 
    patchUser, 
    getUsers, 
    deleteUser, 
    getUser, 
    addUsers 
} = require("../controllers/userController");

const validate = require("../Middleware/validate");
const { addUserValidation } = require("../Validations/userValidation");

// GET all users
router.get("/getusers", getUsers);

// CREATE a single user with validation

// CREATE multiple users with validation
router.post("/addusers", validate(addUserValidation), addUsers);

// GET a single user by ID
router.get("/getuser/:id", getUser);

// UPDATE full user (PUT) with validation
router.put("/putuser/:id", validate(addUserValidation), putUser);

// UPDATE partial user (PATCH) with validation
router.patch("/patchuser/:id", patchUser);

// DELETE a user
router.delete("/deleteusers/:id", deleteUser);

module.exports = router;
