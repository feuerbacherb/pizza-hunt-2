const router = require("express").Router();
const htmlRoutes = "./html/html-routers";

router.use("/", htmlRouters);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!");
});

module.exports = router;
