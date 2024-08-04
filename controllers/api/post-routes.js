const router = require('express').Router();
const {Post, User, Comment} = require('../../models')

router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        include:[ 
        {
            model: User,
            attributes: ['username']
        },
        {
            model: Comment,
        //     attributes: ['username']
        }
        ]
    })
    .catch((err) => {
        res.json(err);
    })
    res.json(postData)
})

module.exports = router