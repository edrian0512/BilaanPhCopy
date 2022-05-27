const express = require('express');
const router = express.Router();


//Handles view
router.get('/', (req, res) => {
    res.render('index');
})

router.get('/register', (req, res) => {
    res.render('registration');
})

router.get('/boracay', (req, res) => {
    res.render('boracay');
})

router.get('/baguio', (req, res) => {
    res.render('baguio');
})

router.get('/bataan', (req, res) => {
    res.render('bataan');
})

router.get('/bicol', (req, res) => {
    res.render('bicol');
})

router.get('/cebu', (req, res) => {
    res.render('cebu');
})

router.get('/ilocosnorte', (req, res) => {
    res.render('ilocosnorte');
})

router.get('/ilocossur', (req, res) => {
    res.render('ilocossur');
})

router.get('/manila', (req, res) => {
    res.render('manila');
})

router.get('/mindoro', (req, res) => {
    res.render('mindoro');
})

router.get('/palawan', (req, res) => {
    res.render('palawan');
})

router.get('/siargao', (req, res) => {
    res.render('siargao');
})



module.exports = router;