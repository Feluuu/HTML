let input=document.querySelector('input');
let content1=document.querySelector('#bgblue');
let content2=document.querySelector('#bgred');
let content3=document.querySelector('#txtwhite');
let content4=document.querySelector('#txtblack');
let content5=document.querySelector('#tm30px');
let content6=document.querySelector('#tm20px');
let content7=document.querySelector('#center');
let content8=document.querySelector('#izq');
let content9=document.querySelector('#txtsub');
let content10=document.querySelector('#letra');
//colocar metodo add.. a botones
content1.addEventListener('click',function(){
    input.style.backgroundColor="blue";
});
content2.addEventListener('click',function(){
    input.style.backgroundColor="red";
});
content3.addEventListener('click',function(){
    input.style.color="white";
});
content4.addEventListener('click',function(){
    input.style.color="black";
});
content5.addEventListener('click',function(){
    input.style.fontSize="30px";
});
content6.addEventListener('click',function(){
    input.style.fontSize="20px";
});
content7.addEventListener('click',function(){
    input.style.textAlign="center";
});
content8.addEventListener('click',function(){
    input.style.textAlign="left";
});
content9.addEventListener('click',function(){
    input.style.textDecoration="underline";
});
content10.addEventListener('click',function(){
    input.style.fontFamily="Jokerman";
});
