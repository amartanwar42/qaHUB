module.exports = (req, res, next) => {
    if (!req.user) {
      res.status(401).json({
         status: "failed",
         message: "You must log in!" });
    }
    else{
      next();
    }
   
  };