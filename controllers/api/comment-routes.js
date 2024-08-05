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
router.post('/', async (req, res) => {
    try {
    const commentData = await Comment.create({
        body: req.body.body,
        user_id: req.session.user_id,
        post_id: req.body.post_id,
    })

    res.status(200).json(commentData)
    } catch (err) {
        res.status(505).json(err)
    }
})

module.exports = router