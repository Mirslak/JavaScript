function Edificio (calle, numero, cp) {
    this.calle = calle;
    this.numero = numero;
    this.cp = cp;
    this.plantas = new Array();

    this.agregarPlantasYPuertas = function (numplantas, puertas) {
        maxplantas = this.plantas.length + numplantas
        for (i = this.plantas.length; i < maxplantas; i++) {
            for (j = 0; j<puertas; j++) {
                this.plantas[i] = new Array(j)
            }
        }
    }

    this.modificarNumero = function (nNumero) {
        this.numero = nNumero;
    }

    this.modificarCalle = function (nCalle) {
        this.calle = nCalle;
    }

    this.modificarCodigoPostal = function (nCP) {
        this.cp = nCP;
    }

    this.imprimeCalle = function () {
        return this.calle;
    }

    this.imprimeNumero = function () {
        return this.numero;
    }

    this.imprimeCodigoPostal = function () {
        return this.cp;
    }

    this.agregarPropietario = function(nombre, planta, puerta){
        this.plantas[planta][puerta] = nombre;
    }

    this.imprimePlantas = function(){
        maxplantas = this.plantas.length
        maxpuertas = this.puertas[0].length

        for(let planta = 0; planta < maxplantas + 1; planta ++){
            for(let puerta = 0; puerta < maxpuertas; puerta++){
                console.log("Puerta: "+ puerta+ ", piso :"+planta+", porpietario: "+nombre);

            }
        }
    }

}

let edificioA = new Edificio("García Prieto", 58, 15706);
let edificioB = new Edificio("Camino Caneiro", 29, 32004);
let edificioC = new Edificio("San Clemente", null, 15705);

document.write("<p>" + edificioA.plantas.length + "</p>");
edificioA.agregarPlantasYPuertas(4,4)
document.write("<p>" + edificioA.plantas.length + "</p>");
edificioA.agregarPlantasYPuertas(4,4)
document.write("<p>" + edificioA.plantas.length + "</p>");
