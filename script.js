var txt=document.querySelector("#txt");
var result=document.querySelector("#result");
 var displayTxt=()=>{
    result.innerHTML=txt.value;
 }
 txt.addEventListener("input",displayTxt)