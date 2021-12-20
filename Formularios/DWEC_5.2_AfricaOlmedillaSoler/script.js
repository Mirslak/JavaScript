const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contrasena: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    contrasena: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "contrasena":
			validarCampo(expresiones.password, e.target, 'password');
			validarContrasena2();
		break;
		case "contrasena2":
			validarContrasena2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		
	    }
    
}

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

const validarContraena2 = () => {
	const inputContrasena = document.getElementById('contrasena');
	const inputContrasena2 = document.getElementById('contrasena2');

	if(inputContrasena.value !== inputContrasena2.value){
		document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['contrasena'] = false;
	} else {
		document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['contrasena'] = true;
	}
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});