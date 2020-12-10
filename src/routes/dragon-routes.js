'use strict';


const express = require('express');
const Dragon = require('../models/dragons');
const dragon = new Dragon();

const router = express.Router();

router.get('/dragons', getDragons);
router.get('/dragons/:id', getOneDragon);
router.post('/dragons',createDragon);
router.put('/dragons/:id', updateDragon);
router.delete('/dragons/:id', destroyDragon);

function getDragons (request, response) {
  const allDragons = dragon.get();
  response.status(200).json(allDragons);
}

function getOneDragon(request, response){
  const id = request.params.id;
  const oneDragon = dragon.get(id);
  response.status(200).json(oneDragon);
}

function createDragon  (request, response){
  const dragon = request.body;
  const newDragon = dragon.create(dragon);
  response.status(200).json(newDragon);
}
function updateDragon (request, response) {
  response.status(200).send('dragon updated');
}

function destroyDragon  (request, response) {
  response.status(200).send('dragon deleted');
}
module.exports = router;