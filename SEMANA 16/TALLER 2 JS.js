function mostrar(){
let r1,r2,r3,r4;
let cant=0;
if(document.getElementById('len01').checked) {
r1="Javascript";
cant++;
}else{
r1=" ";
}
if(document.getElementById('len02').checked) {
r2="Python";
cant++;
}else{
r2=" ";
}
if(document.getElementById('len03').checked) {
r3="PHP";
cant++;
}else{
r3=" ";
}
if(document.getElementById('len04').checked){
r4="C#";
cant++;
}else{
    r4=" ";
}
document.getElementById('resp').value=r1+" "+r2+" "+r3+" "+r4; alert("CANTIDAD DE LENGUAJES SELECCIONADOS ES ..."+cant);
}
function borrar(){
    document.getElementById('len01').checked=" ";
    document.getElementById('len02').checked=" ";
    document.getElementById('len03').checked=" ";
    document.getElementById('len04').checked=" ";
}