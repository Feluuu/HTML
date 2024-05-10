function apostar(){
    let b=101;
    let intentos=0;
    var a=Math.round(Math.random()*100);
    //cicle white
    while(a!=b){
        b=parseInt(prompt("Ingrese Valor Azar [0 A 100]"));
        //
        if(b>a){
            alert("EL VALOR ES MAS BAJO");
        }else{
            alert("EL VALOR ES MAS ALTO");
        }
    intentos++;//contador de intentos consumidos
}
//salida asertar numero random
document.getElementById("apostado").value=b;
document.getElementById("resultado").value=a;
document.getElementById("salida").value="has consumido.. "+intentos+".. intentos";

swal("FELICITACIONES USURARIO ", "HAS ASERTADO NUMERO AZAR EXITOSAMENTE","success");
}
function cancel(){
    document.getElementById("apostado").value=" ";
    document.getElementById("resultado").value=" ";
    document.getElementById("salida").value=" ";
}
