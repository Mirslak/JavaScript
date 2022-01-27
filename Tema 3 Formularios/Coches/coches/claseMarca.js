// _____Variables
/* Las variables que necesito para la web */
let marcaSeleccionada = ""
let estado = document.getElementById("estado")
let logger = document.getElementById("logger")

// _____Declaración de la clase (Marca)
class Marca {
    constructor(nombreMarca) {
        // Antes de crear una marca, miro si existe
        if (!arrayMarcas.includes(minuscular(nombreMarca))) {
        }
        this.nombre = minuscular(nombreMarca);
        this.modelos = new Array(); 
        // Ahora creo un botón que se llame "botón_MARCA" y lo añado a la
        // lista de marcas
        let boton = document.createElement("button");
        boton.id = "boton_" + minuscular(nombreMarca);
        boton.innerHTML = mayuscularEspacios(nombreMarca);
        document.getElementById("lista_marcas").appendChild(boton);
        // Y creo una lista vacía para meter elementos de ese botón, en este
        // caso, modelos para un coche
        let nuevaLista = document.createElement("ul");
        nuevaLista.id = "lista_" + minuscular(nombreMarca)
        document.getElementById("invModelos").appendChild(nuevaLista);
        //Ahora creo el listener del botón
        boton.addEventListener("click", function() {
            // Y lo que va a hacer es mostrar la lista, y yo lo he hecho de la siguiente forma:
            // Primero agarra todas las listas (listas) y luego la propia lista de el botón (milista)
            let listas = document.getElementsByTagName("ul")
            let milista = document.getElementById("lista_" + minuscular(nombreMarca))
            // Y le borro todas las clases a todas las listas
            for (let i = 0; i < listas.length; i++) {
                listas[i].removeAttribute("class")
            }
            // Y para que se vea la lista del botón, le pongo la clase "visible" que definí en el CSS
            milista.className = "visible"
            // Luego cambio la variable de "marcaSeleccionada" para poder añadir modelos a esa
            // marca si la clickeas
            marcaSeleccionada = minuscular(nombreMarca)
        })
        // Añado el objeto a la array
        arrayMarcas.push(this)
        // Y muestro el mensaje en el estado y actualizo el logger
        loggerUpdate();
        estado.innerHTML = 'Marca "<strong>' + mayuscular(this.nombre) + '"</strong> creada correctamente'

    }

    anyadirModelo(nombreModelo) {
        // Primero miro si existe
        if (!(this.modelos.includes(minuscular(nombreModelo)))) {
            this.modelos.push(minuscular(nombreModelo));
            // Y agarro el nombre de la marca
            let nombreMarca = minuscular(this.nombre);
            // Ahora creo un elemento de la lista para que se añada en la lista de modelos,
            // dentro lo dejo bonito, le pongo un ID personalizado que será el nombre de la marca
            // y el nombre del modelo (por si hay dos marcas que tienen el mismo nombre de modelo)
            // y la añado a la lista
            let modelo = document.createElement("li");
            modelo.innerHTML = mayuscularEspacios(mayuscularEspacios(nombreModelo));
            modelo.id = nombreMarca + "_" + minuscular(nombreModelo)
            document.getElementById("lista_" + nombreMarca).appendChild(modelo);
            // Ahora pongo el texto en el estado y actualizo el logger
            loggerUpdate();
            estado.innerHTML = 'Modelo "<strong>' + mayuscular(nombreModelo) + '"</strong>  de <strong>"' + mayuscular(nombreMarca) + '"</strong> creado correctamente'
        }
        
    }

    eliminarModelo(nombreModelo) {
        // Primero miro si existe
        if (this.modelos.includes(minuscular(nombreModelo))) {
            // Y agarro el nombre de la marca, pero como antes tiene "lista_" y son 6 carácteres,
            // le resto esos 6 carácteres y me quedo con el nombre solamente
            let nombreMarca = minuscular(this.nombre.slice(0,6));
            // Ahora agarro el nombre del ID personalizado que hice que voy a eliminar
            let modeloAEliminar = document.getElementById(nombreMarca + "_" + minuscular(nombreModelo))
            // Y elimino el nombre de la lista y el propio nodo
            document.getElementById("lista_" + nombreMarca).removeChild(modeloAEliminar);
            modeloAEliminar.remove();
            // Ahora pongo el texto en el estado y actualizo el logger
            loggerUpdate();
            estado.innerHTML = 'Modelo "<strong>' + mayuscular(nombreModelo) + '"</strong>  de <strong>"' + mayuscular(nombreMarca) + '"</strong> eliminado correctamente'
        }
    }

    listarModelos() {
        let string = "";
        // He creado un string vacío y recorro la marca para agarrar cada modelo y
        // ponerlos separados por un guión
        this.modelos.forEach(modelo => {
            modelo = mayuscular(modelo);
            string += modelo + " - ";
        })
        // Y devuelvo el string, pero como me lo devuelve con un guión, me situo en la posición
        // 0 y voy 2 lugares hacia atrás para llegar al último guión y borrarlo
        return string.slice(0,-2)
    }

    eliminarMarca() {
        // Agarro el nombre de la marca, pero como antes tiene "lista_" y son 6 carácteres,
        // le resto esos 6 carácteres y me quedo con el nombre solamente
        let nombreMarca = minuscular(this.nombre.slice(0,6));
        // Y elimino el botón y el nodo de la lista
        let marcaAEliminar = document.getElementById("boton_" + nombreMarca)
        document.getElementById("lista_marcas").removeChild(marcaAEliminar)
    }
}

// Aquí se guardará la array de modelos, como sólo voy a tener una array no creo
// un objeto
let arrayMarcas = new Array();

