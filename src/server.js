'use strict';

const express = require('express');
const app = express();

module.exports = {
  server: app,
  start: port =>{
    if(!port){throw new Error('You have Missed the Space Port');}
    app.listen(port, () => {
      console.log(`waking up on ${port}`);
    });
  }};