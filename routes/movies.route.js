//Iteration 3 -------

const router = require("express").Router();
const res = require("express/lib/response");
const movieModel = require("./../models/Movie.model")

const retrieveMovies = async function (req,res) {
  try { 
      const retrievedMovies = await movieModel.find()
      console.log(retrievedMovies)
      res.render("movies.hbs",{
          movie:retrievedMovies
      })
  } catch (err) {
    console.error(err);
  }
};

const retrieveDetails = async function(req,res){

    try {
        console.log(req.params.id)
        const retrievedDetails = await movieModel.findById(req.params.id)
        console.log("the details",retrievedDetails)
        res.render("details.hbs",{
            details:retrievedDetails
        })
    }
    catch(err){console.error(err)}

}


router.get("/:id",retrieveDetails)
router.get("/",retrieveMovies)

module.exports = router