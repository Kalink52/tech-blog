const router = require('express').Router();
const Comment = require('../../models/Comment')

router.get('/', async (req, res) => {
    const commentData = await Comment.findAll()
    .catch((err) => {
        res.json(err);
    })
    res.json(commentData)
})

module.exports = router