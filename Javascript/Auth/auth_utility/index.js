require("dotenv").config();
const jwt = require("jsonwebtoken");
const {SECRET} = process.env;

const auth = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
        console.log("helo")
      const token = req.headers.authorization.split(" ")[1];
      console.log(token)
      const payload = await jwt.verify(token, SECRET);
      console.log(payload)
      if (payload){
        req.payload = payload
        next()
      } else {
          res.status(400).json({error: "Verification failed or NO payload"})
      }
    } else {
      res.status(400).json({ error: "No authorization header" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = auth