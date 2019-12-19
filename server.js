const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine',hbs)


app.use(date=(req,res,next)=>{
    let timeNow = new Date();

    if(timeNow.getHours()<8||timeNow.getHours()>=17){
        console.log("we're closed");
            res.send('<h1>We are closed. Visit us between 08h00 and 17h00</h1>');
    }else{
        console.log("we're open");
        next();
    }
})
app.get('/home',(req,res)=>{
    res.render('home.hbs',{tabTitle: 'Home',welcoming:'Welcome to our home page !'})
})
app.get('/ourservices',(req,res)=>{
    res.render('home.hbs',{tabTitle: 'Our Services',welcoming:'Welcome to our services page !'})
})
app.get('/contact',(req,res)=>{
    res.render('home.hbs',{tabTitle: 'Contact',welcoming:'Welcome to our contact page !'})
})
app.get('/',(req,res)=>{
    res.send('<h3> page not found !</h3>')
})
app.listen(3000,(err)=>{
    if(err) console.log("problem starting the server !");
    console.log("server is running...");
})