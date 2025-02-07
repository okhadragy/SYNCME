const express = require("express");
const router = express.Router();
const path = require('path'); 


router.get("/messages/create", (req, res) => {
    res.sendFile(path.join(__dirname,'../views/messageForm.html'))
});
// Export router 
module.exports = router;