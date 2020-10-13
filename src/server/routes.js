const express = require('express');
const router = express.Router();
const heroService = require('./hero.service'); 

router.get('/heroes', (req, res) => {
    heroService.getHeroes(req, res);
});

router.post('/hero', (req, res) => {
    heroService.postHero(req, res);
  });

module.exports=router;