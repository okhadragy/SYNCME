const express = require("express");
const router = express.Router();
const path = require('path'); 


router.get("/students/create", (req, res) => {
    res.sendFile(path.join(__dirname,'../views/report.html'))
});
// Export router 
module.exports = router;