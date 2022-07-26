const express = require("express");

const {
  getAllNews,
  createNews,
  getNewsById,
  updateNews,
  deleteNews,
} = require("./../controllers/newsController");

const {
  signup,
  signin,
  signout
} = require("../controllers/adminController")

const router = express.Router();


router.route("/").get(getAllNews);
router.route("/:id").get(getNewsById);
router.route("/addnews").post(createNews);
router.route("/updatenews/:id").patch(updateNews);
router.route("/deletenews/:id").delete(deleteNews);

router.route('/signup').post(signup);
router.route('/signin').post(signin);
router.route('/signout').post(signout)

module.exports = router;
