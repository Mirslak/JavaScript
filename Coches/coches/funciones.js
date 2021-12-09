// FUNCIONES //

// _____Funciones de control
/* Son las funciones que voy a usar para controlar cosas, como que todo
esté minúscula para manejar nombres mejor, o mayúscula para que la vea el usuario */
function mayuscular(string) {
    let mayuscula = string.slice(0,1).toUpperCase();
    string = string.toLowerCase().split(" ").join("").slice(1,string.length);
    return mayuscula+string;
}
function minuscular(string) {
    return string.toLowerCase();
}

function mayuscularEspacios(string) {
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
        array[i] = mayuscular(array[i])
    }
    return array.join(" ")
}

// _____Funciones de botón
/* Funciones que se usan en los botones
(Los oyentes se encuentran al final) */

function addBotonMarca() {
    // Primero, guardo el valor del input de Marca
    let nombreNuevaMarca = minuscular(document.getElementById("inputMarca").value);
    // Y busco si está la marca en la array de marcas, si está o está vacía no hace nada
    for (let i = 0; i < arrayMarcas.length; i++) {
        if ((arrayMarcas[i].nombre == nombreNuevaMarca) || (nombreNuevaMarca == "")) {
            return
        }
    }
    // Pero si no se encuentra, vacía la caja de texto y añade una marca nueva
        let marca = new Marca(nombreNuevaMarca);
        document.getElementById("inputMarca").value = ""
}

function delBotonMarca() {
    // Lo mismo que arriba pero elíminandola
    // Agarro el valor del input de marca
    let nombreNuevaMarca = minuscular(document.getElementById("inputMarca").value);
    let nombre = ""
    // Y busco si se encuentra la marca en la array
    for (let i = 0; i < arrayMarcas.length; i++) {
        if ((arrayMarcas[i].nombre == nombreNuevaMarca)) {
            nombre = arrayMarcas[i].nombre
            // Si la encuentro, elimino esa marca de la array...
            arrayMarcas.splice(i,1)
            // ...elimino el botón que controla las vistas...
            document.getElementById("lista_marcas").removeChild(document.getElementById("boton_" + nombre))
        }
    }
    // ...vacío el cuadro de texto...
        document.getElementById("inputMarca").value = ""
        // ...y escondo todas las listas, para que se vea mejor
        let listas = document.getElementsByTagName("ul")
        for (let i = 0; i < listas.length; i++) {
            listas[i].removeAttribute("class")
        }
        // Y muestro el estado y actualizo el logger
        loggerUpdate();
        estado.innerHTML = 'Marca "<strong>' + mayuscular(nombreNuevaMarca) + ' "</strong> eliminada correctamente'
    }

function addBotonModelo() {
    // Agarro el valor del input del modelo
    let nombreNuevoModelo = minuscular(document.getElementById("inputModelo").value);
    // Y busco si existe
    for (let i = 0; i < arrayMarcas.length; i++) {
        if (arrayMarcas[i].nombre == marcaSeleccionada) {
            // Y si existe, pues lo añado y vacío el campo
            arrayMarcas[i].anyadirModelo(nombreNuevoModelo)
            document.getElementById("inputModelo").value = ""
            return
        }
    }
}

function delBotonModelo() {
    // Agarro el valor del modelo a eliminar
    let nombreEliminarModelo = minuscular(document.getElementById("inputModelo").value);
    // Y lo busco
    for (let i = 0; i < arrayMarcas.length; i++) {
        // Si se ha encontrado, devolverá la posición y la eliminaré con el splice, si no la
        // ha encontrado (devuelve -1) pues no hace nada
        if (arrayMarcas[i].nombre == marcaSeleccionada) {
            let indexof = arrayMarcas[i].modelos.indexOf(nombreEliminarModelo)
            if (indexof != -1) {
                arrayMarcas[i].modelos.splice(indexof,1)
            }
            document.getElementById("inputModelo").value = ""
            estado.innerHTML = 'Modelo "<strong>' + mayuscular(nombreEliminarModelo) + '"</strong>  de <strong>"' + mayuscular(marcaSeleccionada) + '"</strong> eliminado correctamente'
            loggerUpdate()
            return
        }
    }
}

function loggerUpdate() {
    // Agarro el elemento y la guardo en una variable llamada logger
    let logger = document.getElementById("logger")
    let string = ""
    // Y por cada elemento de la array, agarro su nombre y la lista de modelos
    // para sumársela a la variable string, además para que quede bonito le pongo
    // una separación ( || )
    arrayMarcas.forEach(marca => {
        string += mayuscular(marca.nombre) + ": "
        if (marca.listarModelos() == "") {
            string += "No hay modelos"
        } else {
            string += marca.listarModelos();
        }
        string += " || "
    })
    // Y el logger pasa a ser string, pero como pongo dos barras al final siempre, necesito
    // quitarlas, por eso uso el slice al 0 para que comience en el inicio y -4 para que vaya 4
    // lugares hacia atrás, como es el comienzo pues irá al final y restará los últimos
    // 4 carácteres
    logger.innerHTML = string.slice(0,-4)
}


// _____Listeners
/* Los listeners de los botones*/
const v = document.getElementById("bAnyadirMarca")
v.addEventListener("click", addBotonMarca)

const v2 = document.getElementById("bEliminarMarca")
v2.addEventListener("click", delBotonMarca)

const v3 = document.getElementById("bAnyadirModelo")
v3.addEventListener("click", addBotonModelo)

const v4 = document.getElementById("bEliminarModelo")
v4.addEventListener("click", delBotonModelo)


