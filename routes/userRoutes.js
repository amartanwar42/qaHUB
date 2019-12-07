const mongoose = require('mongoose');
const User = mongoose.model("users");
const requireLogin = require('../middleware/requireLogin');

module.exports = app =>{
    app.get("/api/userList",requireLogin,async (req,res)=>{   
       await User.find({}).then(result =>{
        res.status(200).json({
            status : "passed",
            message: result
        });
       })
       .catch( error =>{
        res.status(500).json({
            status : "failed",
            message: error
        });
       })
       
    })
}