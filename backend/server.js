require('dotenv').config({path: "config/config.env"})
const app=require('./app');
const connectDatabase=require('./config/database')

connectDatabase();

app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running`);
})