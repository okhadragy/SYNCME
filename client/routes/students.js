const express = require("express");
const router = express.Router();
const path = require('path'); 


router.get("/students", (req, res) => {
    res.sendFile(path.join(__dirname,'../views/students.html'))
});
// Export router 
module.exports = router;