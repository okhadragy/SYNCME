const express = require("express");
const router = express.Router();
const path = require('path'); 

 
router.param("groupId", (req, res, next, id) => {
    let pattern = /^\d+$/
    if (pattern.test(id)) {
        next();
    }else {
        res.redirect('/');
    };
});
 
router.get("/group/:groupId", (req, res) => {
    res.sendFile(path.join(__dirname,'../views/greport.html'))
});
// Export router 
module.exports = router;