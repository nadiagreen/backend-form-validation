 

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
//===========================================================================================
var array_counter = function(array) {
    return "There are " + array.length + " in the array.";
}
console.log(array_counter([1, 7, 99, 45, 8]));
//==================================================================================
  
app.listen(3000);