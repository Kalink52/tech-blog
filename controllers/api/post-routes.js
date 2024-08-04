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

module.exports = router