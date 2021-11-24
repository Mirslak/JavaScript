let selectMarca = "";
let estado = document.getElementById("estado");
let logger = document.getElementById("logger");

class Marca{

    constructor(marca){
        this.nombre = marca;
        this.modelos = [];

        //Lista de marcas
        let boton = document.createElement("button");
        let br = document.createElement("br");
        boton.innerHTML= this.nombre;
        document.getElementById("lista_modelo").appendChild(boton);
        document.getElementById("lista_modelo").appendChild(br);

        let listaN = document.createElement("ul");
        nuevaLista.id = "lista_" +nombreMarca;
        document.getElementById("lista_modelo").appendChild(listaN);

        boton.addEventListener("click", function() {
            let listas = document.getElementsByTagName("ul");

            for (let i = 0; i < listas.length; i++) {
                listas[i].removeAttribute("class");
            }

            listas.className = "visible";
        })

        arrayMarcas.push(this)
        // Muestro el mensaje en el estado y actualizo el logger
        loggerUpdate();
        estado.innerHTML = 'Marca "<strong>' + mayuscular(this.nombre) + '"</strong> creada correctamente';

    }

    addModelo(nombreModelo){
        
        
        if(!(this.modelos.includes(nombreModelo))){
            this.modelos.push(nombreModelo);
            
            let modelo = document.createElement("li");
            modelo.innerHTML = nombreModelo;
            modelo.id = nombreMarca + "_" + nombreModelo;
            document.getElementById("lista_" + nombreMarca).appendChild(modelo);
            
            loggerUpdate();
            estado.innerHTML = 'Modelo "<strong>' + nombreModelo + '"</strong>  de <strong>"' + nombreMarca + '"</strong> creado correctamente';
        }
       
    }

    eliminarModelo(nombreModelo){
        if(this.modelos.includes(nombreModelo)){
            let index = this.modelos.indexOf(nombreModelo);
            this.modelos.splice(index,1);

            console.log("El modelo "+nombreModelo+" ha sido eliminado con exito.");
        }else{
            console.log("El modelo "+nombreModelo+" no ha podido ser eliminado.");
        }
    }

    mostrarModelos(){
        //console.log(this.modelos);

        let mostrarM = document.createElement("p");
        mostrarM.innerHTML=this.nombre+"={"+this.modelos+"}";
        document.getElementById("logger").appendChild(mostrarM);
    }
    
};


    let arrayMarcas = new Array();

/*test.addModelo("718 Boxter");
test.addModelo("18 Cayman");
test.addModelo("911");
test.addModelo("918");
test.addModelo("Cayene");
test.addModelo("cayman");
test.addModelo("Macan");
test.addModelo("Panasera");

test.mostrarModelos("Porshe");*/




/*let p = document.createElement("p");

p.innerHTML="Hola buenas tardes";

document.getElementById("cabesera").appendChild(p);*/
