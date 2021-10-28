const express = require('express');
const router = express.Router()


router.get('/tweets', (req, res) => {
    const str =[{
        "name": "Sam the Coder",
        "msg": "The National Anthem don't even slap",
        "username": "samthecoder"
    }]
    res.end(JSON.stringify(str));
});

router.post('/addTweet', (req, res) => {
    res.end('NA');
});

module.exports = router;