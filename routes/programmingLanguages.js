const express = require("express");
const router = express.Router();
const programming_languages = require('../services/programmingLanguages');

//get 
router.get('/', async (req, res, next) => {
    try{
        res.status(200).json(await programming_languages.getMultiple(req.query.page))
    }
    catch(error) {
            console.error(`Error while getting programming languages `, error.message);
            next(error);
    }
})

// post 
router.post('/', async function(req, res, next) {
    try {
      res.status(200).json(await programming_languages.create(req.body));
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
  });

// update 
router.put('/:id', async (req, res, next) => {
  try {
    res.status(200).json(await programming_languages.update(req.params.id, req.body))
  } catch (err) {
    console.log(`Error while updating programming language`, err.message);
    next(err);
  }
})  

//delete
router.delete('/:id', async (req, res, next) => {
  try{
    res.status(200).json(await programming_languages.remove(req.params.id))
  } catch (err) {
    console.log(`Error while deleting programming language`, err.message);
    next(err);
  }
})
module.exports = router;