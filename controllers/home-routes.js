const router = require('express').Router();
const {Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req,res) => {
     try {
        const userData = await User.findAll({
          attributes: { exclude: ['password'] },
          order: [['username', 'ASC']],
        });
    
        const users = userData.map((project) => project.get({ plain: true }));
    
        res.render('all', {
          users,
          logged_in: req.session.logged_in,
        });
    }catch (err){
        res.status(505).json(err)
    }
})


router.get('/dashboard', withAuth, async (req,res) => {
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
router.get('/dashboard/:id', withAuth, async (req,res) => {
    try{
        const postData = await Post.findByPk(req.params.id, {
            include:[
            {
                model: User
            },
            {
                model: Comment
            }
                
            ]
                })
                
        const post = postData.get({plain:true})
        // const commentsData = post.comments
        // const comments = commentsData.map((comment) => comment.get({plain:true}))\\

        res.render('blogpost',{
            post,
            // comments,\
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


module.exports = router