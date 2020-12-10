'use strict';

const { response } = require('express');
const express = require('express');
const Elves = require('../models/elves');
const elves = new Elves();

const router = express.Router();

router.get('/elves', getElves);
router.get('/elves/:id', getOneElves);
router.post('/elves',createElves);
router.put('/elves/:id', updateElves);
router.delete('/elves/:id', destroyElves);


function getElves (request, response) {
  const allElves = elves.get();
  response.status(200).json(allElves);
};

function getOneElves (request, resopnse){
  const id = request.params.id;
  const oneElves = elves.get(id);
  response.status(200).json(oneElves);
};
function createElves (request, response){
  const elves = request.body;
  const newElves = elves.create(elves);
  response.status(200).json(newElves);
};
function updateElves (request, response){
  response.status(200).send('elves updated');
};

function destroyElves (request, response){
  response.status(200).send('elves deleted');
};

module.exports = router;
