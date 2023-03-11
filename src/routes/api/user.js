const router = require("express").Router();

router.get("/user", (req,res) => {
  const userId = req.signedCookies;
  console.log(userId)

    // if (!userId) {
    //   res.send({message: "not logged in"});
    //   return;
    // }
})

module.exports = router;