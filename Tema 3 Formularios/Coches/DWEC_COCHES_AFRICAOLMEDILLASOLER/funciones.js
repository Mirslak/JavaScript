/*En este archivo .js se encuntran todas las funciones
que utilizaré para el programa

He decidido separlas para tener un codigo más limpio*/ 



// Botones

//Define y recoge al pulsar el boton de "Añadir" Marca
function addBMarca() {
    
    //Recojo los valores del imput del html en el que escribimos la marca
    let nMarca = document.getElementById("texto_marca").value;
    
    //Recorro la Array para ver si esta repetido
    for (let i = 0; i < arrayMarcas.length; i++) {
        if ((arrayMarcas[i].nombre == nMarca) || (nMarca == "")) {
            return;
        }else{

            //Si no se encuntra en la array creo el objeto y lo meto
            let marca = new Marca(nMarca);
            document.getElementById("texto_marca").value = "";  //vacio el contenido del input
            return;
        }
    }
}

//Define y recoge al pulsar el boton de "Eliminar" Marca
function delBMarca() {
     //Recojo los valores del imput del html en el que escribimos la marca
    let nMarca = document.getElementById("texto_marca").value;
    let nombre = "";
     //Recorro la Array para ver si esta repetido
    for (let i = 0; i < arrayMarcas.length; i++) {
        if ((arrayMarcas[i].nombre == nMarca)) {
            nombre = arrayMarcas[i].nombre
            
            arrayMarcas.splice(i,1)                 //si existe la coincidencia elimino el nombre de la array
            
            document.getElementById("lista_marcas").removeChild(document.getElementById("boton_" + nombre));
        }
    }
   
        document.getElementById("texto_marca").value = ""       ////vacio el contenido del input
       
        let listas = document.getElementsByTagName("ul");       //elimino la marca de la lista
        for (let i = 0; i < listas.length; i++) {
            listas[i].removeAttribute("class");
        }
        

        //Actualizo el logger
        loggerUpdate();
        estado.innerHTML = 'Marca "<strong>' + nombreNuevaMarca + ' "</strong> eliminada correctamente';
}


//Define y recoge al pulsar el boton de "Añadir" Modelo
function addBModelo() {
   
    //Recojo los valores del imput del html en el que escribimos el modelo
    let nModelo = document.getElementById("texto_modelo").value;
    
     //Recorro la Array para ver si esta repetido
    for (let i = 0; i < arrayMarcas.length; i++) {
        if (arrayMarcas[i].nombre == selectMarca) {
            arrayMarcas[i].addModelo(nModelo);              //Si exite llamo a la función de la marca y añado el modelo
            document.getElementById("texto_modelo").value = "";         //Vacio el input
            return;
        }
    }
}



//Funcion que define y recoje al pulsar el boton "Eliminar" Modelo
function delBModelo() {
    
    //Recojo los valores del imput del html en el que escribimos el modelo
    let nEliminarModelo = document.getElementById("texto_modelo").value;
  
    //Recorro la array y busco coincidencias
    for (let i = 0; i < arrayMarcas.length; i++) {
      
        if (arrayMarcas[i].nombre == selectMarca) {
            let indexof = arrayMarcas[i].modelos.indexOf(nEliminarModelo);      //Recojo la posicion
            if (indexof != -1) {
                arrayMarcas[i].modelos.splice(indexof,1);       //Elimino
            }
            document.getElementById("texto_modelo").value = "";     //Vacio el input

            //Actualizo el estado y el logger
            estado.innerHTML = 'Modelo "<strong>' + nombreEliminarModelo + '"</strong>  de <strong>"' + marcaSeleccionada + '"</strong> eliminado correctamente';
            loggerUpdate();
            return;
        }
    }
}



//Funcion que activa y ejecuta el logger
function loggerUpdate() {
    
    let logger = document.getElementById("logger")      //Creo el logger
    let string = ""
    
    //Recorre y muestra la array
    arrayMarcas.forEach(marca => {
        string += marca.nombre+ ": "
        if (marca.listarModelos() == "") {
            string += "No hay modelos"
        } else {
            string += marca.listarModelos();
        }
        string += " || "
    })
   
    logger.innerHTML = string.slice(0,-4)
}

//Oyentes
const test = document.getElementById("add_marca")
test.addEventListener("click", addBMarca);

const test2 = document.getElementById("remove_marca")
test2.addEventListener("click", delBMarca);

const test3 = document.getElementById("add_modelo")
test3.addEventListener("click", addBModelo);

const test4 = document.getElementById("remove_modelo")
test4.addEventListener("click", delBModelo);


