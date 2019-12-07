const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
require("./models/User");
require("./models/Category");
require("./services/passport");
require("./models/ShareKnowledgeForm")
const bodyParser = require('body-parser')

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require('./routes/userRoutes')(app);
require('./routes/contentRoutes')(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
