var var1=document.querySelector(".third");
var var2=document.querySelector(".third11");
var b1=document.querySelector(".b2");
var x1=document.querySelector(".heading");
var x2=document.querySelector(".fourth");
var dd=document.querySelector(".fifth");
var x3=document.querySelector(".X");
var section = document.querySelector("html");

b1.addEventListener('click',appear);
function appear(){
    var1.style.display = "block";
    var2.style.opacity = 0.8;
    x1.style.display = "none";
    x2.style.display = "none";
    dd.style.display = "none";
    flag=false;
    // section.style.filter = "blur(3px)"
}


// x1.style.top = "35%";
x3.addEventListener("click",disappear);
function disappear(){
    var1.style.display = "none";
    x1.style.display = "block";
    x2.style.display = "block";
    dd.style.display = "block";
    curr=false;
    // var2.style.animation = "1s back"
}


var s1=document.querySelector(".right");
var s2=document.querySelector(".right11");
var s3=document.querySelector(".b1");
var s4=document.querySelector(".X1");
s3.addEventListener("click",app);
function app(){
    s1.style.display = "block";
    s2.style.opacity = 0.8;
    dd.style.display = "none";
    x1.style.display = "none";
    x2.style.display = "none";
}

s4.addEventListener("click",disapp);
function disapp(){
    s1.style.display = "none";
    x1.style.display = "block";
    x2.style.display = "block";
    dd.style.display = "block";
}



var ss1=document.querySelector(".about");
var ss2=document.querySelector(".about11");
var ss3=document.querySelector(".b0");
var ss4=document.querySelector(".X3");
var ss5=document.querySelector(".center");
ss3.addEventListener("click",appp);
function appp(){
    ss1.style.display = "block";
    ss2.style.opacity = 0.8;
    dd.style.display = "none";
    x1.style.display = "none";
    x2.style.display = "none";
}

ss4.addEventListener("click",disappp);
function disappp(){
    ss1.style.display = "none";
    x1.style.display = "block";
    dd.style.display = "block";
    x2.style.display = "block";
}


var sss1=document.querySelector(".final");
var sss2=document.querySelector(".final11");
var sss3=document.querySelector(".b3");
var sss4=document.querySelector(".X4");
// var ss5=document.querySelector(".center");
sss3.addEventListener("click",apppp);
function apppp(){
    sss1.style.display = "block";
    sss2.style.opacity = 0.8;
    dd.style.display = "none";
    x1.style.display = "none";
    x2.style.display = "none";
}

sss4.addEventListener("click",disapppp);
function disapppp(){
    sss1.style.display = "none";
    x1.style.display = "block";
    x2.style.display = "block";
    dd.style.display = "block";
}

