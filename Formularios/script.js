const idNombre = document.getElementById("nombre");
const idApellido = document.getElementById("apellido");
const idTelefono = document.getElementById("telefono");
const idEmail = document.getElementById("email");
const idContrasena = document.getElementById("contrasena");
const idNacionalidad = document.getElementById("nacionalidad");
const idFechaNacimiento = document.getElementById("fNacimiento");

const errorNombre = document.getElementById("errorNombre");
const errorApellido = document.getElementById("errorApellido");
const errorTelefono = document.getElementById("errorTelefono");
const errorEmail = document.getElementById("errorEmail");
const errorContrasena = document.getElementById("errorContrasena");

idNombre.addEventListener("keyup", function(){
    if(idNombre.value.includes("hola")){
        errorNombre.classList.add("visible");
    }else{
        errorNombre.classList.remove("visible");
    }
});

idApellido.addEventListener("keyup", function(){
    if(idApellido.value.includes("hola")){
        errorApellido.classList.add("visible");
    }else{
        errorApellido.classList.remove("visible");
    }
});

idTelefono.addEventListener("keyup", function(){
    if(idTelefono.value.includes("hola")){
        errorTelefono.classList.add("visible");
    }else{
        errorTelefono.classList.remove("visible");
    }
});

idEmail.addEventListener("keyup", function(){
    if(idEmail.value.includes("hola")){
        errorEmail.classList.add("visible");
    }else{
        errorEmail.classList.remove("visible");
    }
});

idContrasena.addEventListener("keyup", function(){
    if(idContrasena.value.includes("hola")){
        errorContrasena.classList.add("visible");
    }else{
        errorContrasena.classList.remove("visible");
    }
});


const loliImg = document.getElementById("loliImg");