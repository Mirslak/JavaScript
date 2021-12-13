const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
		case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                document.getElementById("usuario").classList.remove("formulario__grupo-incorrecto");
                document.getElementById("usuario").classList.add("formulario__grupo-correcto");
                
            }
            break;
		case "nombre":
            
            break;
            case "password":
               
            case "password2":
                validarPassword2();
                break;
                case "correo":
                  
                    break;
                    case "telefono":
                        validarCampo(expresiones.telefono, e.target, 'telefono');
                        break;
                    }
                }

                const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
        document.getElementById(`${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});