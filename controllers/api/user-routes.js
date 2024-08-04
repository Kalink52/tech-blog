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

module.exports = router