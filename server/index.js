const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const mssql = require('mssql');

//
/*
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const fileUpload = require('express-fileupload');
app.use(fileUpload({ useTempFiles: true }));
*/

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//

//Connect to SQLServer
app.get('/api/TAIKHOAN', async () => {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            await mssql.connect('mssql://nros:123@localhost/RENTALAPARTMENT')
            const result = await mssql.query `SELECT * FROM TAIKHOAN`
            console.dir(result)
        } 
        catch (err) {
            console.log(err)
        }       
});
// Fixed start for Admin
const adminRoute = require("./routes/AdminRoute");
app.use("/admin", adminRoute);
// Fixed start for Partner
const partnerRoute = require("./routes/PartnerRoute");
app.use("/partner", partnerRoute);
// Fixed start for Customer
const customerRoute = require("./routes/CustomerRoute");
app.use("/customer", customerRoute);

app.listen(PORT, (req, res) => {
    console.log("Running at " + PORT);
})
app.get("/", (req, res) => {
    res.send("Hello world!");
})