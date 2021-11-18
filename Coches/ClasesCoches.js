class Coche{

    constructor(marca){
        this.nombre = marca;
        this.modelos = [];
    }

    addModelo(nombreModelo){
        if(!(this.modelos.includes(nombreModelo))){
            this.modelos.push(this.nombre);
            console.log("El modelo "+nombreModelo+" ha sido añadido.");
        }else{
            console.log("El modelo "+nombreModelo+" no ha podido ser añadido.");
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


