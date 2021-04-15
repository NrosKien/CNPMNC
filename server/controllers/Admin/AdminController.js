const {poolPromise} = require('../../db')


module.exports= {
    get: (req,res)=>{
        res.send("Admin-san, hello!");
    },
    postData: (req,res)=>{
        console.log(`req.body`,req.body);
        res.status(201).json({msg: 'Sign in Success'});
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
            return res.status(404).json({msg: 'User is not exist'});
        return res.status(200).send({account});
    },
    getData1: (async (req,res)=> {
        try{
            const pool = await poolPromise
            const result = await pool.request()
            .input('Email',NVARCHAR(50), req.query.email)
            .query('SELECT * FROM TAIKHOAN WHERE Email = @Email')

            res.json(result.recordset)
        }
        catch (err){
            res.status(500)
            res.send(err.message)
        }
    })
}


