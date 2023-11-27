// Create web server

// 1. Import Express
const express = require('express');

// 2. Create an express instance
const app = express();

// 3. Create a port
const port = 3000;

// 4. Create a route
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// 5. Listen to a port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// 6. Create a route for comments
app.get('/comments', (req, res) => {
    res.send('This is comments page!')
});

// 7. Create a route for a specific comment
app.get('/comments/:id', (req, res) => {
    res.send('This is comment number ' + req.params.id);
});

// 8. Create a route for a specific comment and specific comment body
app.get('/comments/:id/:body', (req, res) => {
    res.send('This is comment number ' + req.params.id + ' and comment body ' + req.params.body);
});

// 9. Create a route for a specific comment and specific comment body and specific comment author
app.get('/comments/:id/:body/:author', (req, res) => {
    res.send('This is comment number ' + req.params.id + ' and comment body ' + req.params.body + ' and comment author ' + req.params.author);
});

// 10. Create a route for a specific comment and specific comment body and specific comment author and specific comment date
app.get('/comments/:id/:body/:author/:date', (req, res) => {
    res.send('This is comment number ' + req.params.id + ' and comment body ' + req.params.body + ' and comment author ' + req.params.author + ' and comment date ' + req.params.date);
});

// 11. Create a route for a specific comment and specific comment body and specific comment author and specific comment date and specific comment time
app.get('/comments/:id/:body/:author/:date/:time', (req, res) => {
    res.send('This is comment number ' + req.params.id + ' and comment body ' + req.params.body + ' and comment author ' + req.params.author + ' and comment date ' + req.params.date + ' and comment time ' + req.params.time);
});

//