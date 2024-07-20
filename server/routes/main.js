const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "Nodejs Blog site",
        description: "Simple Blog posting site created with nodejs express, ejs"
    }
    res.render(`index`,{ locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;