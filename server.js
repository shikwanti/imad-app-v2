var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' :
        {
            title: 'article-one | inderjeet kaur',
            heading:'ARTICLE-ONE.',
            date:'5 feb 2017',
            content:   `<p>
                    my name is inderjeet kaur . i am from surat gujrat. this is my first article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
                    </p>
                    <p>
                    my name is inderjeet kaur . i am from surat gujrat. this is my first article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
                     </p>
                     <p>
                    my name is inderjeet kaur . i am from surat gujrat. this is my first article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
                    </p>
                    <p>
                     my name is inderjeet kaur . i am from surat gujrat. this is my first article. i am so happy and exited about this . also i am exicted about IMAD course and its modules that comes every week.
                    </p>`
        
        },
     'article-two' : 
        {
            title: 'article-two | inderjeet kaur',
            heading:'ARTICLE-TWO.',
            date:'7 feb 2017',
            content:   `<p>
                            my name is inderjeet kaur . i am from surat gujrat. this is my second article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
                        </p>
                        <p> 
                            my name is inderjeet kaur . i am from surat gujrat. this is my second article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
                        </p>
                        <p>
                            my name is inderjeet kaur . i am from surat gujrat. this is my second article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
                        </p>
                        <p>
                            my name is inderjeet kaur . i am from surat gujrat. this is my second article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
                        </p>`
        },
     'article-three' : 
        {
            title: 'article-three | inderjeet kaur',
            heading:'ARTICLE-THREE.',
            date:'10 feb 2017',
            content:`<p>
                my name is inderjeet kaur . i am from surat gujrat. this is my third article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
            </p>
            <p>
                my name is inderjeet kaur . i am from surat gujrat. this is my third article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
            </p>
            <p>
                my name is inderjeet kaur . i am from surat gujrat. this is my third article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
            </p>
            <p>
                my name is inderjeet kaur . i am from surat gujrat. this is my third article. i am so happy and excited about this . also i am exicted about IMAD course and its modules that comes every week.
            </p>`
        
        }
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
app.get('/:articlename',function(req,res)
{
    //articlename==article-one
    //article[articlename]=={} content object in  article-one
    var articlename = req.params.articlename;    
    res.send(createtemplate(articles[articlename]));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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
