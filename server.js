var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var article1 = {
    title :' Article1',
    heading: 'Welcome to page1',
    date: 'aug 15th, 2017',
    content: `
            <p> this is the content in the page article one   this is the content in the page article one   this is the content in the page article one</p>
            <p> this is the content in the page article one   this is the content in the page article one   this is the content in the page article one</p>
            <p> this is the content in the page article one</p>`
};

var article2 = {
    title :' Article2',
    heading: 'Welcome to page2',
    date: 'aug 10th, 2017',
    content: `
            <p> this is the content in the page article two this is the content in the page article two this is the content in the page article two</p>
            <p> this is the content in the page article two this is the content in the page article two this is the content in the page article two</p>
            <p> this is the content in the page article two this is the content in the page article two this is the content in the page article two</p>`
};

var article3 = {
    title :' Article3',
    heading: 'Welcome to page3',
    date: 'aug 20th, 2017',
    content: `
           
            <p> this is the content in the page article three this is the content in the page article three this is the content in the page article three</p>
            <p> this is the content in the page article three this is the content in the page article three this is the content in the page article three</p>
            <p> this is the content in the page article three this is the content in the page article three this is the content in the page article three</p>`
};

function createTemp(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmltemp =
    `<html>
          <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet"/>
          </head>
          
          <body>
            <h1>${heading}</h1>
            <a href="/">HOME</a>
            <a href="/article2">Page2</a>
            <a href="/article3">Page3</a>
            <h2>${date}</h2>
            <div class="container">
                ${content}           
            </div>
            
          </body>
    </html>`
    
    return htmltemp;
}

app.get('/article1', function (req, res){
    res.send(createTemp(article1));
});

app.get('/article3', function (req, res){
    res.send(createTemp(article3));
});

app.get('/article2', function (req, res){
    res.send(createTemp(article2));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
