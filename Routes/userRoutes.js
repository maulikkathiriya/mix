const express = require("express");
const router = express.Router();
const { putUser, patchUsers, getUsers, postUser, deleteUser } = require("../controllers/userController");

// GET all users
router.get("/getusers", getUsers);

// CREATE user
router.post("/postuser", postUser);

// PUT (full update)
router.put("/putuser/:id", putUser);  // 👈 This must be a valid function

// PATCH (partial update)
router.patch("/patchuser/:id", patchUsers);

router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
