const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const {check, validationResult } = require('express-validator');
const config = require("config");
const auth = require('../middleware/auth');

const UserSchema = require("../schemas/User");

router.get('/', auth, async (req, res) => {
    try{
        const user = await UserSchema.findById(req.user.id).select("-password");
        res.json(user);
    }catch(error){
        console.log(error.message);
        return res.status(500).json({msg: "Server Error ..."});
    }
})

router.get('/', (req, res) => {
    res.send('USERS');
})

router.post('/register',
    [
       check('email','Enter proper email').isEmail(),
       check('password','Password is required').not().isEmpty() 
    ],
    async (req, res) => {
        try{
            let { email, password, firstName, lastName, age, phone, address } = req.body;
            
            let user = await UserSchema.findOne({ email});
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(401).json({errors: errors.array()})
            }

            if(user){
                return res.status(401).json({msg: "There is already user with this email"});
            }

            const salt = await bcryptjs.genSalt(10);
            password = await bcryptjs.hash(password, salt);

            user = new UserSchema({
                email,
                password,
                firstName,
                lastName,
                age,
                phone,
                address
            });
            // console.log(user);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            }
            
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                (err, token) => {
                    if(err) throw err;
                    res.json({ token, user });
                }
            )
            // return res.status(200).json({status:"good"})
        } catch(error) {
            console.log(error.message);
            return res.status(500).json({msg:"Server Error..."});
        }
    });

    router.post('/login',
        [
            check('email',"Type proper email").isEmail(),
            check("password","Password is required").not().isEmpty()
        ],
        async (req, res) => {
            try{
                const { email, password } = req.body;
                const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(401).json({errors: errors.array()})
                }
                let user = await UserSchema.findOne({ email });

                if(!user){
                    return res.status(401).json({msg:"There is no user with this email"});
                }

                let isPasswordMatch = await bcryptjs.compare(password, user.password);

                if(isPasswordMatch){
                    const payload = {
                        user: {
                            id: user.id
                        }
                    }
                    
                    jwt.sign(
                        payload,
                        config.get('jwtSecret'),
                        (err, token) => {
                            if(err) throw err;
                            res.json({ token, user });
                            
                        }
                    )
                }else {
                    return res.status(401).json({msg: "Password's incorrect"});
                }
            }catch(error){
                console.log(error.message);
                return res.status(500).json({msg:"Server Error..."});
            }
        }
    )


module.exports = router;