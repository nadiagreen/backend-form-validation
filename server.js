 

const express = require("express");
  
const app = express();
app.use(express.static('public' ));
// создаем парсер для данных в формате json
const jsonParser = express.json();
  
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.json(request.body); // отправляем пришедший ответ обратно
});
  
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/public.html");
});
 function call(func) {
     func(); 
 }
 var printSomething = function (){
     console.log("Prosto text");
 }
 call(printSomething);
app.listen(3000);