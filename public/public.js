var dwsForm = document.getElementsByClassName("dws-form");
var arrDwsForm = [...dwsForm];
var tabs = document.getElementsByClassName("tab");
var arrTabs = [...tabs];
var tabForms = document.getElementsByClassName("tab-form");
var arrTabForms = [...tabForms];
var inputs = document.getElementsByClassName('input');
  for(var i = 0; i < arrTabs.length; i++){
      arrTabs[i].addEventListener("click", function(){
          for(var i = 0; i < arrTabs.length; i++){
          arrTabs[i].classList.remove("active");
          arrTabForms[i].classList.remove("active");
          }
          this.classList.add("active");
          arrTabForms[arrTabs.indexOf(this)].classList.add("active");
        console.log(arrTabs.indexOf(this));
      });
  }; 
 for (var i = 0; i  < inputs.length; i++){
     inputs[i].addEventListener("focus", function(){
        this.parentElement.classList.add('focus'); 
     });
     inputs[i].addEventListener ("blur", function(){
         if(this.value == ""){
             this.parentElement.classList.remove("focus");
         }
     });
 }