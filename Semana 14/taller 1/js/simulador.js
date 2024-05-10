function calcular(){
    //proceso de transferencia del formulario en Js 
    var n1=document.getElementById("valorc").value;
    var n2=document.getElementById("numc").value;
    var n3=document.getElementById("interes").value;
    //procesode calcular en js
    var ValorA=parseFloat(n1)*parseFloat(n3);// fx valor $ mes a pagar
    var ValorB=(parseFloat(n1)*(1+parseFloat(n2)*parseFloat(n3)));// fx pago total $ credito
    //proceso de transferencia del js al formulario
    document.getElementById("valora").value=ValorA;
    document.getElementById("valorb").value=ValorB.toFixed(0);
}
function limpíar(){
    document.getElementById("valorc").value=" ";// borrar input 
    document.getElementById("numc").value=" ";// borrar input
    document.getElementById("interes").value=" "; //borrar input

}