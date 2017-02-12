var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articletwo = {
    title: 'article-two | inderjeet kaur',
    heading:'ARTICLE-TWO.',
    date:'7 feb 2017',
    content:   `<p>
                    my name is inderjeet kaur . i am from surat gujrat. this is my second article. i am so happy and exited about this . also i am exicted about IMAD course and its modules that comes every week.
                </p>
                <p> 
                    my name is inderjeet kaur . i am from surat gujrat. this is my second article. i am so happy and exited about this . also i am exicted about IMAD course and its modules that comes every week.
                </p>
                <p>
                    my name is inderjeet kaur . i am from surat gujrat. this is my second article. i am so happy and exited about this . also i am exicted about IMAD course and its modules that comes every week.
                </p>
                <p>
                    my name is inderjeet kaur . i am from surat gujrat. this is my second article. i am so happy and exited about this . also i am exicted about IMAD course and its modules that comes every week.
                </p>`
};
function createtemplate (data)
{
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = ` 
<html>
    <head>
        <title>
           ${title}   
        </title>
        <meta name="viewport" content="width-device-width,initial-scale=0.1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <div>
            <p>
                
            </p>
        </div>
        <div>
            <a href="/article-one">article-one</a>
        </div>
        <hr/>
        <div>
            <p>
                
            </p>
        </div>
        <div>
            <a href="/article-three">article-three</a>
        </div>
        <hr/>
        <div>
            <h1>
                ${heading}
            </h1>
        </div>
        <div>
            <h3>
                ${date}
            </h3>
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}    



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function(req,res)
{
    res.send(createtemplate(articletwo));
});
app.get('/article-three',function(req,res)
{
     res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
