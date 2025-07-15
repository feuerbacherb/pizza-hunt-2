const router = require("express").Router();
// import all of the API routes from /api/index.js (no need for index.js though since it is implied)
const apiRoutes = require("./api");
const htmlRoutes = "./html/html-routers";

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use("/api", apiRoutes);

router.use("/", htmlRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!");
});

module.exports = router;
