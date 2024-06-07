function validainputs(){
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let ingreso=document.getElementById("login");
    let emailval=email.value.trim();  //Elimina  espacios a ambos lados
    let passwordval=password.value.trim();
    let passwordok="a12345";
    var errorf=0;
    // seccion validacion email
    if(emailval===""){
        ocErrorform(email,"Por favor ingrese su email");
        errorf=1; // activar error
    }
    else if(!valEmail(emailval)){
        ocErrorform(email,"Email no valido");
        errorf=1;
    }
    else{
        exitosform(email);
    }
    // seccion validacion password
    if(passwordval===""){
        ocErrorform(password,"Por favor ingrese su contraseña");
        errorf=1; // activar error
    }else if(passwordval != passwordok){
        ocErrorform(password,"Contraseña incorrecta...");
        errorf=1; // activar error
    }
    else{
        exitosform(password);
    }
    //seccion de validacion ingreso exitoso de informacion
    if(errorf==0){
        ingreso.addEventListener('click',function(){
            swal("ACCESO PERMITIDO A PLATAFORMA..","CLICK OK para continuar..","success");
        })
    }
    return false;   //pausa pantalla
// seccion de funcion error
function ocErrorform(input,message){
    let formControl=input.parentElement;
    let small=formControl.querySelector("small");
    formControl.className="form-control error";
    small.innerText= message;
}
// seccion de funcion exitos
function exitosform(input){
    let formControl=input.parentElement;
    formControl.className="form-control success";
}
// expresion regular Js para email - formato ingreso de datos
function valEmail(email){
    return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
    }
}

// seccion mostrar contraseña
function mostrarSeña(){
    var tipo=document.getElementById("password");
    if(tipo.type=="password"){
        tipo.type="text"; // se muestra contraseña al dar clic en checkbox
    }else{
        tipo.type="password"; // se oculta contraseña al dar clic en checkbox
    }
}