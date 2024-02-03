const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'studentpages')));

app.listen(3000,()=>{
    console.log("On port 3000!!!");
})