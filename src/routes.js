const { Router } = require("express");
const {
  registerUser,
  userLogin,
  getAllMovies,
  addMovie,
  deleteFilm,
  getFilteredMovies,
} = require("./controllers");
const authenticate = require("./middleware");

const router = Router();

router.get("/movies", authenticate, getAllMovies);
router.post("/register", registerUser);
router.post("/login", userLogin);
router.post("/filter", authenticate, getFilteredMovies);
router.post("/newMovie", authenticate, addMovie); 
router.delete("/deleteMovie", deleteFilm);
module.exports = router;
