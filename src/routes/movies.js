const express = require("express");
const router = express.Router();

// Controller

 const MoviesControllers = require("../controllers/moviesControllers"); 

/*  Movies list   */
router.get('/movies',MoviesControllers.allMovies);

/* Movies Detail */
router.get('/movies/:id',MoviesControllers.detailmovies);

/* Movies Create */
router.post("/movies",MoviesControllers.createMovies);

/*  Movies Search*/
/* 
router.get('/search',MoviesControllers.searchMovies); */

/* Movies Edit  */
router.put('/movies/:id',MoviesControllers.updateMovies);

/* Movies Delete */

router.delete('/movies/:id',MoviesControllers.deleteMovies);

module.exports = router;
