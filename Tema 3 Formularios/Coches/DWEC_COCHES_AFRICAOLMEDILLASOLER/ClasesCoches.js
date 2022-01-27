//Defino lasvariables globales que utilizaré.

let selectMarca = "";
let estado = document.getElementById("estado");
let logger = document.getElementById("logger");

//la clase 
class Marca{

    constructor(marca){
        this.nombre = marca;
        this.modelos = [];

        //Las listas que contendrán los botones de los
        //diferentes modelos y marcas


        /*(Disclamer: No me ha dado tiempo a solucionar este problema visual
            ya que la lista no aparece correctamente en el CSS) */
        let boton = document.createElement("button");
        let br = document.createElement("br");
        boton.id = "boton_" + this.nombre;              //crea un nuevo nombre para la array
        boton.innerHTML= this.nombre;
        document.getElementById("lista_marca").appendChild(boton);
        document.getElementById("lista_marca").appendChild(br);

        let listaN = document.createElement("ul");
        listaN.id = "lista_" +marca;                    //Crea un nuevo nombre para la array
        document.getElementById("lista_marca").appendChild(listaN);

        boton.addEventListener("click", function() {
            let listas = document.getElementsByTagName("ul");

            for (let i = 0; i < listas.length; i++) {
                listas[i].removeAttribute("class");
            }

            listas.className = "visible";

            selectMarca = this.nombre;
        })

        //meto los nuevos elementos en el array
        arrayMarcas.push(this)
        // Muestro el mensaje en el estado y actualizo el logger
        loggerUpdate();
        estado.innerHTML = 'Marca "<strong>' + this.nombre + '"</strong> creada correctamente';

    }

    //Funcion que añade un nuevo modelo a la marca
    addModelo(nombreModelo){
        
        
        if(!(this.modelos.includes(nombreModelo))){
            this.modelos.push(nombreModelo);
            
            let modelo = document.createElement("li");
            modelo.innerHTML = nombreModelo;
            modelo.id = this.nombre + "_" + nombreModelo;
            document.getElementById("lista_" + this.nombre).appendChild(modelo);
            
            loggerUpdate();
            estado.innerHTML = 'Modelo "<strong>' + nombreModelo + '"</strong>  de <strong>"' + this.nombre + '"</strong> creado correctamente';
        }
       
    }

    //Funcion que muestra los modelos en el logger
    listarModelos() {
        let string = "";
        
        this.modelos.forEach(modelo => {
            modelo = modelo;
            string += modelo + " - ";
        })
        
        return string.slice(0,-2)
    }

    //Eliminas modelos de la marca
    eliminarModelo(nombreModelo){
        if(this.modelos.includes(nombreModelo)){
            let index = this.modelos.indexOf(nombreModelo);
            this.modelos.splice(index,1);

            console.log("El modelo "+nombreModelo+" ha sido eliminado con exito.");
        }else{
            console.log("El modelo "+nombreModelo+" no ha podido ser eliminado.");
        }
    }


    
};

    //Creo la array de marcas
    let arrayMarcas = new Array();

