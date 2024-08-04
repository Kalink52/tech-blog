const router = require('express').Router();
const Post = require('../../models/Post')

router.get('/', async (req, res) => {
    const postData = await Post.findAll().catch((err) => {
        res.json(err);
    })
    res.json(postData)
})

module.exports = router