import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
// User modol
const User = require('../models/User');

class userController { 

// Register handle

static register(req, res){
    const { name, email, password} = req.body;


    // Validation

    User.findOne({ email: email})
        .then(user => {
            if(user){
                // User exists
                res.status(409).json({status:409, message:'User exist'}) 

            }else{
                const newUser = new User({
                    name,
                    email,
                    password
                })
                //  Hash Password

                bcrypt.genSalt(10, (err, salt) =>
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    // set password to hashed

                    newUser.password = hash;
                    // save user 
                    newUser.save() 
                    .then(() => {
                        const token = jwt.sign( {name: newUser.name, id: newUser._id, mail: newUser.email},process.env.JWT_SECRET
                        );
                        res.status(201).json({status: 201, message: 'you are register you can log in!', token});
                        
                    })               
                })
                )
            }
        })
    }

}

export default userController