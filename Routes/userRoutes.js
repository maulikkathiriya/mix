const express = require("express");
const router = express.Router();
const { putUser, patchUser, getUsers, postUser, deleteUser , getUser , addUsers} = require("../controllers/userController");

// GET all users
router.get("/getusers", getUsers);

// CREATE user
router.post("/postuser", postUser);

// PUT (full update)
router.put("/putuser/:id", putUser);  // 👈 This must be a valid function

// PATCH (partial update)
router.patch("/patchuser/:id", patchUser);

router.delete("/deleteusers/:id", deleteUser);

router.get("/getuser/:id",getUser);
router.post("/addusers", addUsers);

module.exports = router;
