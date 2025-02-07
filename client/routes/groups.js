const express = require("express");
const router = express.Router();
const path = require('path'); 


router.get("/groups", (req, res) => {
    res.sendFile(path.join(__dirname,'../views/groups.html'))
});
// Export router 
module.exports = router;