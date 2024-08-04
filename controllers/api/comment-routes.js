const router = require('express').Router();
const { Post } = require('../../models');
const Comment = require('../../models/Comment')

router.get('/', async (req, res) => {
    const commentData = await Comment.findAll({
        include:[ 
        {
            model: Post,
            // attributes: ['username']
        }
        ]
    })
    .catch((err) => {
        res.json(err);
    })
    res.json(commentData)
})

module.exports = router