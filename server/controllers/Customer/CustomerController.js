
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const {CLIENT_URL} = process.env
const sendMail = require('./sendMail')

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

const createActivationToken = (payload) =>{
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET,{expireIn: '5m'})
}
const createAccessToken = (payload) =>{
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET,{expireIn: '15m'})
}
const creatRefreshToken = (payload) =>{
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET,{expireIn: '7d'})
}




module.exports= {
    get: (req,res)=>{
        res.send("Customer-san, hello!")
    },
    register: async (req,res) =>{
        try{
            const { name, email, password } = req.body
            if (!name || !email || !password)
                return res.status(400).json({ msg: "Please fill in all fields." })
            res.json({ msg: "Register Test" })

            if (!validateEmail(email))
                return res.status(400).json({ msg: "Invalid email." })

            const user = await Users.findOne({email})
            if (user) 
                return res.status(400).json({ msg: "This email is exists." })
            if (password.length< 6)
                return res.status(400).json({msg: "Password must be at least 6 characters."})

            //Encoded Password
            const passwordHash = await bcrypt.hash(password,12)
            
            //Register and Activate email
            const newUser = {
                name, emali, password: passwordHash
            }           
            const activation_token = createActivationToken (newUser)
            const url = `${CLIENT_URL}/user/activate/${activation_token}`
            sendMail(email, url)
            res.json({msg:"Register Success! Please activate your email to start."})
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}