const express = require("express");
const router = express.Router();
const path = require('path'); 


router.get("/messages", (req, res) => {
    res.sendFile(path.join(__dirname,'../views/Message list.html'))
});
// Export router 
module.exports = router;