const router = require('express').Router();
const {User, Comment} = require('../../models')

router.get('/', async (req, res) => {
    const userData = await User.findAll({
        include:[
            {
                model: Comment
            }
        ]
    })
    .catch((err) => {
        res.json(err);
    })
    res.json(userData)
})

router.post('/login', async (req,res) => {
    try{
        // looks for matching email in the database
        const userData = await User.findOne({ where: { username: req.body.username } });
        // if there's no match....
        if (!userData) {
          res
            .status(400)
            .json({ message: "Incorrect email or password. Please try again." });
          return;
        }
        // now check if the password matches the email
        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: "Incorrect email or password. Please try again." });
          return;
        }
        // save login to the session
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
    
          res.json({ user: userData, message: "Welcome! You are logged in." });
        });

        res.render('login')
    }catch (err){
        res.status(505).json(err)
    }
    
})

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;