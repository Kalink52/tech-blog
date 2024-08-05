const router = require('express').Router();
const {Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req,res) => {
     try {
        //
        const userData = await User.findByPk(req.session.user_id,{
            include:[
                {
                    model: Comment
                },
                {
                  model: Post
              }
            ],
          attributes: { exclude: ['password'] },
          order: [['username', 'ASC']],
        });
        // const users = userData.map((project) => project.get({ plain: true }));
        const user = userData.get({plain:true})


        res.render('all', {
          user,
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
            posts,
            logged_in: req.session.logged_in,
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
          logged_in: req.session.logged_in,
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