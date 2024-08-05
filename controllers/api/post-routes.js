const router = require('express').Router();
const {Post, User, Comment} = require('../../models')

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll({
            include:[ 
                {
                    model: User,
                    attributes: ['username']
                },
                {
                    model: Comment,
                    // attributes: ['username']
                }
                ]
        })
        res.json(postData)
        res.render('all')
    }catch (err){
        res.status(505).json(err)
    }

 
})

router.post('/', async (req, res) => {
    try {
    const postData = await Post.create({
        user_id: req.session.user_id,
        title: req.body.title,
        body: req.body.body
    })

    res.status(200).json(postData)
    } catch (err) {
        res.status(505).json(err)
    }
})
module.exports = router