/*genera un mensaje -alert- indicando nombre, eded y nivel del estudiary function*/ mostrar()
{
    let nombre, edad, nivel, institucion; 
    nombre=document.getElementById('nom').value; 
    edad=document.getElementById('ed').value; 
    institucion=document.getElementById('ins').value; 
    if (document.getElementById('radiol').checked)
    {
    estado="Primaria";
    }
    if(document.getElementById('radio2').checked)
    {
    estado="Secundaria";
    }
    if (document.getElementById('radio3').checked)
    {
    estado="Tecnico";
    }
    if(document.getElementById('radio4').checked)
    {
    estado="Universitario";
    }
    if(document.getElementById('radic5').checked)
    {
    estado="Otros Estudios";
    }
    alert('El estudiante '+nombre+'de edad años, cursa actualmente'+estado+ 'en la Institución institucion'+institucion);
    }