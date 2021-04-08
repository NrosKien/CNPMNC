module.exports= {
    get: (req,res)=>{
        res.send("Admin-san, hello!");
    },
    postData: (req,res)=>{
        console.log(`req.body`,req.body);
        res.status(201).json({message: 'Sign in Success'});
    },
    getData: (req,res)=>{
        const {email} = req.query;
        const accounts =[
            {
                name: 'nrostrungkien',
                email: 'nrostrungkien3779@gmail.com',
                age: 20
            },
            {
                name: 'user',
                email: 'user@gmail.com',
                age: 18
            }
        ];
        const account = accounts.find(i => i.email ==email)
        if(!account>0) 
            return res.status(404).json({message: 'User is not exsist'});
        return res.status(200).send({account});
    }
}


