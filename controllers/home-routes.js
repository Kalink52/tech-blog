const router = require('express').Router();
const {Post, User, Comment} = require('../models')

router.get('/', async (req,res) => {
    try{

        res.render('all')
    }catch (err){
        res.status(505).json(err)
    }
})


router.get('/dashboard', async (req,res) => {
    try{
        const postData = await Post.findAll({
            include:[ 
            {
                model: User,
                attributes: ['username']
            },
            ]
        })

        
        const posts = postData.map((post) => post.get({plain:true}))

        res.render('dashboard',{
            posts
        })
    }catch (err){
        res.status(505).json(err)
    }
    

})

router.get('/login', async (req,res) => {
    try{

        res.render('login')
    }catch (err){
        res.status(505).json(err)
    }
    
})

router.get('/logout', async (req,res) => {
    try{

        res.render('logout')
    }catch (err){
        res.status(505).json(err)
    }
})
module.exports = router