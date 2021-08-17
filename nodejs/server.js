const express = require('express');

const app = express();

app.get('/server', (Request, Response)=>{
    // Response.setHeader('Access-Control-Allow-Origin', '*');
    Response.send('hello');
});

// get opention
app.all('/server', (Request, Response)=>{
    Response.setHeader('Access-Control-Allow-Origin', '*');
    Response.setHeader('Access-Control-Allow-Headers', '*');
    Response.send('hello post');
});


// get opention
app.all('/json-server', (Request, Response)=>{
    Response.setHeader('Access-Control-Allow-Origin', '*');
    Response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'zfm31321'
    }
    //转换
    let str = JSON.stringify(data);
    Response.send(str);
});


// Ie缓存, 超时
app.all('/ie', (Request, Response)=>{
    Response.setHeader('Access-Control-Allow-Origin', '*');
    Response.setHeader('Access-Control-Allow-Headers', '*');
    // Response.send('hello ie');

    setTimeout(() => {
        Response.send('hello ie');
    },3000);
});

// Ie缓存, 超时
app.all('/delay', (Request, Response)=>{
    Response.setHeader('Access-Control-Allow-Origin', '*');
    Response.setHeader('Access-Control-Allow-Headers', '*');

    setTimeout(() => {
        Response.send('hello delay');
    },3000);
});

// Ie缓存, 超时
app.all('/home', (Request, Response)=>{
    Response.sendFile(__dirname + '/index.html');
});

app.listen(8000, ()=>{
    console.log("8000 on already")
})


