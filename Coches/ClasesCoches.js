class Coche{

    constructor(marca){
        this.nombre = marca;
        this.modelos = [];

        //Lista de marcas
        let boton = document.createElement("button");
        let br = document.createElement("br");
        boton.innerHTML= this.nombre;
        document.getElementById("lista_marca").appendChild(boton);
        document.getElementById("lista_marca").appendChild(br);

        let listaN = document.createElement("ul");
        document.getElementById("lista_marca").appendChild(listaN);
    }

    addModelo(nombreModelo){
        if(!(this.modelos.includes(nombreModelo))){
            this.modelos.push(nombreModelo);
            
            console.log("El modelo "+nombreModelo+" ha sido añadido.");

            let addM = document.createElement("p");
            addM.innerHTML = "El modelo "+nombreModelo+" ha sido añadido.";
            document.getElementById("estado").appendChild(addM);
        }else{
            console.log("El modelo "+nombreModelo+" no ha podido ser añadido.");

            let addMF = document.createElement("p");
            addMF.innerHTML="El modelo "+nombreModelo+" no ha podido ser añadido. "
            document.getElementById("estado").appendChild(addMF);
            
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

    mostrarModelos(nombreModelo){
        console.log(this.modelos);

        let mostrarM = document.createElement("p");
        mostrarM.innerHTML=this.nombre+"={"+this.modelos+"}";
        document.getElementById("logger").appendChild(mostrarM);
    }

};

let test = new Coche("Porsche");
test.addModelo("718 Boxter");
test.addModelo("18 Cayman");
test.addModelo("911");
test.addModelo("918");
test.addModelo("Cayene");
test.addModelo("cayman");
test.addModelo("Macan");
test.addModelo("Panasera");

test.mostrarModelos("Porshe");

let test2 = new Coche("Ferrary");
let test3 = new Coche("Ford");
let test4 = new Coche("Seat");
let test5 = new Coche("Renault");


/*let p = document.createElement("p");

p.innerHTML="Hola buenas tardes";

document.getElementById("cabesera").appendChild(p);*/
