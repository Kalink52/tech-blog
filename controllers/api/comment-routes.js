const router = require('express').Router();
const { Post, Comment, User } = require('../../models');

router.get('/', async (req, res) => {
    const commentData = await Comment.findAll({
        include:[ 
        {
            model: Post,
            // attributes: ['username']
        },
        {
            model: User,
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


router.get('/:id', async (req,res) => {
    try{
        const postData = await Post.findByPk(req.params.id, {
            include:[{
                model: User
            },]
        }) 
        const commentsData = await Comment.findAll({
            where: { post_id: postData.id},
            include:[{
                model: User
            },
            ]
    })
        res.json(commentsData)
    }catch (err){
        res.status(505).json(err)
    }
    

})


module.exports = router