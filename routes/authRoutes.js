const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
  app.get("/auth/google/callback", passport.authenticate("google"),(req,res)=>{
    res.redirect("/")
  });
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
    // res.send(req.user);
  });
  app.get("/api/current_user", (req, res) => {
    if(req.user){
      res.status(200).json({
        status: true,
        message: req.user});  
    }
    else{
      res.status(404).json({
        status: false,
        message:"No loggedin user found"
      });
    }   
  });
};
