const express = require("express");
const router = express.Router();
const path = require('path'); 

 
router.param("messageId", (req, res, next, id) => {
    let pattern = /^\d+$/
    if (pattern.test(id)) {
        next();
    }else {
        res.redirect('/');
    };
});
 
router.get("/message/:messageId", (req, res) => {
    res.sendFile(path.join(__dirname,'../views/messageForm.html'))
});
// Export router 
module.exports = router;