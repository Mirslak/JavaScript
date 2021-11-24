// Botones
function addBMarca() {
    
    let nMarca = document.getElementById("texto_marca").value;
    
    for (let i = 0; i < arrayMarcas.length; i++) {
        if ((arrayMarcas[i].nombre == nMarca) || (nMarca == "")) {
            return
        }
    }
        let marca = new Marca(nMarca);
        document.getElementById("texto_marca").value = "";
}

function delBMarca() {
    
    let nMarca = document.getElementById("texto_marca").value;
    let nombre = "";
    
    for (let i = 0; i < arrayMarcas.length; i++) {
        if ((arrayMarcas[i].nombre == nMarca)) {
            nombre = arrayMarcas[i].nombre
            
            arrayMarcas.splice(i,1)
            
            document.getElementById("lista_marcas").removeChild(document.getElementById("boton_" + nombre));
        }
    }
   
        document.getElementById("texto_marca").value = ""
       
        let listas = document.getElementsByTagName("ul");
        for (let i = 0; i < listas.length; i++) {
            listas[i].removeAttribute("class");
        }
        
        loggerUpdate();
        estado.innerHTML = 'Marca "<strong>' + nombreNuevaMarca + ' "</strong> eliminada correctamente';
}

function addBModelo() {
   
    let nModelo = document.getElementById("texto_modelo").value;
    
    for (let i = 0; i < arrayMarcas.length; i++) {
        if (arrayMarcas[i].nombre == selectMarca) {
            arrayMarcas[i].anyadirModelo(nModelo);
            document.getElementById("texto_modelo").value = "";
            return;
        }
    }
}

function delBMarca() {
    let nMarca = document.getElementById("texto_marca").value;
    let nombre = ""
   
    for (let i = 0; i < arrayMarcas.length; i++) {
        if ((arrayMarcas[i].nombre == nMarca)) {
            nombre = arrayMarcas[i].nombre;
           
            arrayMarcas.splice(i,1);
           
            document.getElementById("lista_marcas").removeChild(document.getElementById("boton_" + nombre));
        }
    }
   
        document.getElementById("texto_marca").value = "";
       
        let listas = document.getElementsByTagName("ul")
        for (let i = 0; i < listas.length; i++) {
            listas[i].removeAttribute("class");
        }
       
        loggerUpdate();
        estado.innerHTML = 'Marca "<strong>' + nombreNuevaMarca+ ' "</strong> eliminada correctamente';
}

function addBModelo() {
    
    let nModelo = document.getElementById("texto_modelo").value;
   
    for (let i = 0; i < arrayMarcas.length; i++) {
        if (arrayMarcas[i].nombre == selectMarca) {
        
            arrayMarcas[i].anyadirModelo(nModelo);
            document.getElementById("texto_modelo").value = "";
            return
        }
    }
}

function delBModelo() {
    
    let nEliminarModelo = document.getElementById("texto_modelo").value;
  
    for (let i = 0; i < arrayMarcas.length; i++) {
      
        if (arrayMarcas[i].nombre == selectMarca) {
            let indexof = arrayMarcas[i].modelos.indexOf(nEliminarModelo);
            if (indexof != -1) {
                arrayMarcas[i].modelos.splice(indexof,1);
            }
            document.getElementById("texto_modelo").value = "";
            estado.innerHTML = 'Modelo "<strong>' + nombreEliminarModelo + '"</strong>  de <strong>"' + marcaSeleccionada + '"</strong> eliminado correctamente';
            loggerUpdate();
            return;
        }
    }
}

function loggerUpdate() {
    
    let logger = document.getElementById("logger")
    let string = ""
    
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


