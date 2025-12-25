const express = require("express");
const router = express.Router();
const { 
    putUser, 
    patchUser, 
    getUsers, 
    postUser, 
    deleteUser, 
    getUser, 
    addUsers 
} = require("../controllers/userController");

// GET all users
router.get("/getusers", getUsers);

// CREATE a single user
router.post("/postuser", postUser);

// CREATE multiple users
router.post("/addusers", addUsers);

// GET a single user by ID
router.get("/getuser/:id", getUser);

// UPDATE full user (PUT)
router.put("/putuser/:id", putUser);

// UPDATE partial user (PATCH)
router.patch("/patchuser/:id", patchUser);

// DELETE a user
router.delete("/deleteusers/:id", deleteUser);

module.exports = router;
