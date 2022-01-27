//funciones generales
let arrayPalbras1 = ["Casa","Arbol","Rojo"];
//let arrayPalbras2 = new Array();

//1.Realiza una función que reciba un array de palabras y devuelva una
// cadena con la concatenación de todas ellas, separadas por comas.
function uno(cadena){
    //Recojo la Array por parámetros y la muestro en consola
   console.log(cadena);
    alert(cadena);

}

function boton1(){
  uno(arrayPalbras1);
    
}

//2.Realiza una función que reciba una serie de cadenas de 
//caracteres (string) ylas muestre concatenadas y separadas por comas.
function dos(){
    //Creo una arry y recojo una cadena de caracteres
    let array2 = new Array();
    let cadena = "";
    for(let i = 0; i<=5; i++){
    cadena = prompt("Escriba la palabra: ");

    //Separo la array
    array2.push(cadena);
    }

    //la muestro por consola
    console.log(array2);
    alert(array2);

}

function boton2(){
    dos();
       
}

//3.Realiza una función que reciba una serie de números. Debes separarlos
// en un array para buscar si hay repetidos. Si uno de los valores es cero,
// se detiene en ese instante.

function tres(numeros){
    
    //busco que los numeros sean unicosS
    let num = Array.from(new Set(numeros));
    
    //Recorro la array
    for (let i = 0; i < num.length; i++) {
        if (num[i] == 0) {
        
            break;
        }
       //Aquí recojo los contadores recorriendo la array
        let count = 0;
        
        for (let j = i; j < numeros.length; j++) {
            if (num[i] == numeros[j]) {
                count++;
            }
        }
       
        //Muestro la informacion en la consola
        console.log("El número " + num[i] + " se repite " + count + " veces.")
    }
}

function boton3(){
    let num = prompt("Introduzca números: ").split("");
    tres(num);
       
}

/*4.Realiza un lector de cadenas de texto que genera un array con la
 función split(). Posteriormente, muestra la siguiente 
información: Número de palabras, primera palabra, última palabra, 
las palabras colocadas en orden inverso, las palabras ordenadas de
la a la z y las palabras ordenadas de la z a la a. */

function cuatro(){

    //Espacios y comas

    let espacio = " ";
    let coma = ",";

    //Recojo la cadena
    let cadena = prompt("Escriba una frase: ");

    // Trabajo la cadena
    let cadenadecadenas = cadena.split(espacio);
    let tamaño = cadenadecadenas.length;
    //Muestro los datos como la primera palabra y la ultima
    console.log("La cadena original es: "+cadena);
    console.log("La cadena tiene "+cadenadecadenas.length+" elementos.");
    console.log("la primera palabra es: "+cadenadecadenas[0]);
    console.log("La última palabra es: "+cadenadecadenas[tamaño-1]);
    console.log("La array ordenadad de la A a la Z: "+cadenadecadenas.sort());
    console.log("La array ordenada de la Z a la A: "+cadenadecadenas.reverse());


}
function boton4(){
    cuatro();
       
}
