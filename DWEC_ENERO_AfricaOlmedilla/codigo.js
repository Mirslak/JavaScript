//Recojo el contenido de todos lo inputos que posen el id formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


//Creo las expresiones regulares que usaré para validar el código
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    dni: /^[a-z]{3}[0-9]{6}[a-z]?$/i, //9 números y una letra
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/ // 4 a 12 digitos.
}

//Los campos inicializan como false para poder validarse
const campos = {
    nombre: false,
    apellido: false,
    dni : false,
    ususario: false,
    password: false
}

//Comparo los datos recogidos por los imputs y depediendo de su id lo valido con la expresion regular.
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "dni":
			validarCampo(expresiones.dni, e.target, 'dni');
		break;
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
	    }
    
}


//Si la validacion se realiza este apratado me generará la parte visual del contenido
//creando elementos y borrando otros para mostrar al usuario un feedback sobre el contenido.

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

//La funcion "validarFormulario" se inicializa al escribir en el input, así comienza la validación
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});