const router = require("express").Router();
const path = require('path');

router.get("/", (req,res) => {
  console.log(res.body)
  console.log(req.body)
})

// router.use(function(req, res, next) {
//   console.log(req.url, "@", Date.now());
//   next();
// })

// module.exports = db => {}

module.exports = router;