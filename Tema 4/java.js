function Coche(){
    //Propiedades
    this.marca = "Audi A6";
    this.combustible = "diesel";
    this.cantidad = 0;          //Cantidad de combustible en el depósito

}

let cocheAfrica = new Coche();
let cocheJuanq = new Coche();

function Coche(marca, combustible){
    //Propiedades
    this.marca = marca;
    this.combustible = combustible;
    this.cantidad = 0;      //Cantidad inicial por defecto
}

let cocheAfrica = new Coche("Volswagen Golf","Gasolina");
let cocheAfrica = new Coche("Mercedes SLK","diesel");

document.writeln("El coche de Africa es un: "+cocheAfrica.marca+" a "+cocheAfrica.combustible);
document.writeln("El coche de Juaquin es un: "+cocheJuanq.marca+" a "+cocheJuanq.combustible);