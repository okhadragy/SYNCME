const express = require("express");
const router = express.Router();
const path = require('path'); 

 
router.param("studentId", (req, res, next, id) => {
    let pattern = /^\d+$/
    if (pattern.test(id)) {
        next();
    }else {
        res.redirect('/');
    };
});
 
router.get("/student/:studentId", (req, res) => {
    res.sendFile(path.join(__dirname,'../views/report.html'))
});
// Export router 
module.exports = router;