console.log('Loaded!');

var button=document.getElementById('counter');
button.onclick = function ()
{
    //create a request object
    var request= new XMLHttpRequest();
    
    //capture the response and store it in a variable
    resquest.onreadystatechange = function()
    { 
        if(request.readyState==XMLHttpRequest.DONE)
    {
        if(request.status==200)
        {
           var counter = request.responseText;
           var span=document.getElementById('count');
           span.innerHTML=counter.toString();
        }
    }
    //not done yet
    };
    //make a request
    request.open('GET','http://shikwanti.imad.hasura-app.io/counter',true);
    request.send(null);
   

};