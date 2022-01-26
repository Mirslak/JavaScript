//Version primera
/*const getValueInput = () =>{
    let vnombre = document.getElementById("nombre");
    let vapellido = document.getElementById("apellido").value;
    let vdni = document.getElementById("dni").value;
    let vusuario = document.getElementById("usuario").value;
    let vcontraseña = document.getElementById("contraseña").value;
    document.getElementById("valueInput").innerHTML = "Nombre: "+vnombre+"<br> Apellido: "+ vapellido
    +"<br> DNI: "+ vdni+ "<br> Usuario: "+ vusuario+ "<br> Contraseña: "+ vcontraseña;
}
*/
//Version optimizada
const getValueInput = () =>{
    var elementos = document.querySelectorAll('#formulario input');
    var cosas= "";
    for(var i = 0; i< elementos.length; i++){
        cosas =cosas +"<br>"+ elementos[i].value;
    }

    document.getElementById("valueInput").innerHTML = cosas;
    
}
