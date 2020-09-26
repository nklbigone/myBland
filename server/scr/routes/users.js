import express from 'express';
// import controller from '../controller/usersController'
import jwt from 'jsonwebtoken'
import Auth from '../middlewares/auths'
const  router = express.Router()
// User modol

// Register handle

// router.post('/register', controller.register)

    // Login handle

    router.post('/login', Auth.login , (req, res) => {
            const token = jwt.sign( {name: req.user.name, id: req.user._id, mail: req.user.email},process.env.JWT_SECRET
            );
            res
              .status(200)
              .json({ status: 200, message: "you loged in", token });
    }  )

    // Logout handle

    router.get('/logout', (req, res) => {
        req.logout();
        res.status(200).json({status:200, message:'you loged out'})
    })
module.exports = router