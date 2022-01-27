//Validación

const formulario = document.querySelectorAll("#formulario input");

const expresiones = {
    nombreA: /^[A-zÁ-ź\s]{2,40}$/,
    usuario: /^[A-z0-9]/
}

function holaconsola(mensaje) {
    console.log(mensaje)
}

let pinga = document.getElementById("pinga")

pinga.addEventListener("blur", () => {
    const valor = pinga.value
    if (expresiones.nombreA.test(valor)) {
        console.log("Si")
    } else {
        console.log("No")
    }
})



//Version primera

function getValueInput() {
    let vnombre = document.getElementById("nombre").value;
    let vapellido = document.getElementById("apellido").value;
    let vdni = document.getElementById("dni").value;
    let vusuario = document.getElementById("usuario").value;
    let vcontraseña = document.getElementById("contraseña").value;
    let isChecked = document.getElementsByClassName("check");
    let dia = "";
    let vobserv = document.getElementById("observacion").value;
    for (let i = 0; i < isChecked.length; i++) {
         const check = isChecked[i];
        
        if (check.checked) {
            console.log(check.value)
            dia = dia+ check.value +", ";
        }
    }
    //Mostrar el contenido
    document.getElementById("valueInput").innerHTML = 
    "Nombre: "+vnombre+"<br>"+
    "Apellido: "+vapellido+"<br>"+
    "DNI: "+vdni+"<br>"+
    "Usuario: "+vusuario+"<br>"+
    "Contraseña: "+vcontraseña+"<br>"+
    "Día seleccionado: "+dia.slice(0 ,-2)+"<br>"+
    "Observacion:"+"<br>"+vobserv;
    
}
/*
//Version primera
const getValueInput = () =>{
    let vnombre = document.getElementById("nombre").value;
    let vapellido = document.getElementById("apellido").value;
    let vdni = document.getElementById("dni").value;
    let vusuario = document.getElementById("usuario").value;
    let vcontraseña = document.getElementById("contraseña").value;
    let isChecked = document.getElementsByClassName("check").checked =  true;

    if(isChecked){
        document.getElementById("valueInput").innerHTML = "Nombre: "+vnombre+"<br> Apellido: "+ vapellido
        +"<br> DNI: "+ vdni+ "<br> Usuario: "+ vusuario+ "<br> Contraseña: "+ vcontraseña + "<br> Dia seleccionado: "+ isChecked.value;
    }else{
        document.getElementById("valueInput").innerHTML = "Nombre: "+vnombre.value+"<br> Apellido: "+ vapellido
        +"<br> DNI: "+ vdni+ "<br> Usuario: "+ vusuario+ "<br> Contraseña: "+ vcontraseña;
    }
}


//Version optimizada
const getValueInput = () =>{
    var elementos = document.querySelectorAll('#formulario input');
    var cosas= "";

    var isChek = document.getElementsByClassName("check").checket;
    
    for(var i = 0; i< elementos.length; i++){
        
        cosas =cosas +"<br>"+ elementos[i].value;
        
    }

    document.getElementById("valueInput").innerHTML = cosas;
    
}*/
