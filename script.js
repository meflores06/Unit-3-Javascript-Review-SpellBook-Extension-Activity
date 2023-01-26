
let rabbit=document.querySelector (".rabbit");
let spell1button=document.querySelector (".spell-onebutton");
let spell2=document.querySelector (".header-2");
let spell2button=document.querySelector (".spell-twobutton");
let spell3button=document.querySelector (".spell-threebutton");
let body=document.querySelector ("body");
let spell4button=document.querySelector(".spell-4button");
let mario=document.querySelector(".mario");

spell1button.onclick=function(){
    rabbit.style.display="block";
};

spell2button.onclick=function(){
    spell2.innerHTML="Hello";
};

spell3button.onclick=function(){
    body.style.backgroundColor="#d3b0f5";
};

spell4button.onclick=function(){
    mario.style.display="block";
};

