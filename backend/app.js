const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser = require('body-parser');
const generateUploadURL  = require('./s3.js')

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({
    AccessControlAllowOrigin: '*',
    origin: '*',
    credentials: true,
 }));


//route imports 
const bookRouter=require('./routers/bookRoute')

app.use("/api/v1", bookRouter)

app.get('/api/v1/s3Url', async (req, res) => {
    const response = await generateUploadURL();
    res.status(200).send({
        "url":response.uploadURL,
        "key":response.docName
    })
  })

module.exports = app;