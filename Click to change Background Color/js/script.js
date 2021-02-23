var bgHead = document.getElementById("bgHead");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

btn1.addEventListener("click",function(){
    bgHead.style.backgroundColor = "#ff6347";
})
btn2.addEventListener("click",function(){
    bgHead.style.backgroundColor = "#ee82ee";
})
btn3.addEventListener("click",function(){
    bgHead.style.backgroundColor = "#f5deb3";
})
btn4.addEventListener("click",function(){
    bgHead.style.backgroundColor = "#ffff00";
})
btn5.addEventListener("click",function(){
    bgHead.style.backgroundColor = "#9acd32";
})
bgHead.addEventListener("click",function(){
    bgHead.style.backgroundColor = "#fff";
})