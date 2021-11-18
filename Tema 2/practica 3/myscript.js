//1. Crear un JavaScript que abra una ventana de alerta con un saludo
function punto1() {
alert("¡Hola!, ¿Qué tal?");

//Crea un tipo element
let parrafo = document.createEvent ("p");

//Crea un nodo tipo Text
let contenido = document.createTextNode ("HAPPY");

//Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);

//Añadir el nodo ELement como hijo de la página
document.body.appendChild (parrafo);
};

//2.Crear un JavaScript que pida dos números y los sume
function punto2(){
let num1 = prompt("Escriba el primer número: ");
let num2 = prompt("Escriba el segundo número: ");

// operación
let resultado = parseInt(num1) + parseInt(num2) ;

alert (resultado);
};

/*3.Crear un JavaScript que nos muestra una alerta que tenga como mensaje un 1 al pichar sobre
aceptar salga otro con el 2, así hasta 3. Realizarlo con bucles.*/
function punto3(){
    for(let num = 1; num <= 3; num++){
        alert(num);
    };
};

/*4. Crear un JavaScript que muestre dos mensaje de alerta seguidos*/
function punto4(){
    alert("Hola, este es el primer mensaje");
    alert("Hola, este es el segundo mensaje");
};

/*5.. Crear un JavaScript con checkbox que de la opción de mostrar un texto en h3, en rojo, y si activan las dos casillas apliquen las dos opciones.
sol: */

/*6.Crear un JavaScript que nos pida una contraseña para acceder a una pagina, creada por ti */
function punto6(){
    let contraseña = prompt("Escriba la contraseña: ");

    if (contraseña == "africa"){
        window.open("punto6.html");
    }else{
        alert("contraseña incorrecta, pruebe con 'africa'");
    }


}

/*7.A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];
• Determinar cual de los dos elementos de texto es mayor
• Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false
• Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos */
    let valores = [true, 5, false, "hola", "adios", 2];
    
    function punto71(){
    let string1 = valores[3].length;
    let string2 = valores[4].length;

    if (string1 > string2){
         alert("Entre \""+valores[3]+"\" y \""+valores[4]+"\" la Palabra más larga es: "+ valores[3]);
    }else{
        alert("Entre \""+valores[3]+"\" y \""+valores[4]+"\" la Palabra más larga es: "+ valores[4]);
    }
    }

    function punto72(){
        let valor1 = valores[0];
        let valor2 = valores[2];

                                    //Resultado True
        if (valor1 && valor2){
            alert("True && False : True");
        }else{
            alert("True && False : False");
        }

                                    //Resultado False
        if (valor1 || valor2){
            alert("True || False : True");
        }else{
            alert("True || False : False");
        }
    }

    function punto73(){
        let num1 = valores[1];
        let num2 = valores[5];

                                    //Suma
        let suma = num1 + num2;
        alert("La suma de: "+num1+" + "+num2+" es: "+suma);
                                    //Resta
                                    //Eligo el orden de la resta según qué número es mayor.
        if (num1 > num2){
            let resta = num1 - num2;
            alert ("La resta de: "+num1+" - "+num2+" es: "+resta);
        }else{
            let resta = num2 - num1;
            alert ("La resta de: "+num2+" - "+num1+" es: "+resta);
        }
                                    //Multiplición
        let multiplicacion = num1 * num2;
        alert("La multiplicación de: "+num1+" * "+num2+" es: "+multiplicacion);

                                    //División
                                 //Eligo el orden de la división según qué número es mayor.
        if (num1 > num2){
            let division = num1 / num2;
            alert ("La división de: "+num1+" / "+num2+" es: "+division);
        }else{
            let division = num2 / num1;
            alert ("La división de: "+num2+" / "+num1+" es: "+division);
        }
                                    //Resto
                                 //Eligo el orden del resto según qué número es mayor.
        if (num1 > num2){
            let resto = num1 % num2;
            alert ("El resto de: "+num1+" % "+num2+" es: "+resto);
        }else{
            let resto = num2 % num1;
            alert ("El resto  de: "+num2+" % "+num1+" es: "+resto);
        }
    }

/* 8.Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla los doce nombres utilizando la función console.log().*/
    function punto8(){
    console.clear;
    console.log(meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Noviembre","Diciembre"]);
    }


/* 9. Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:*/
    var numero1 = 5;

    var numero2 = 8;

    if(numero1 > numero2) {

        console.log("numero1 no es mayor que numero2");

    }

    if(numero2 > 0){

        console.log("numero2 es positivo");

    }

    if(numero1 < 0 || numero1 != 0){

        console.log("numero1 es negativo o distinto de cero");

    } 

    if (!(++numero1 >= numero2)){

        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");

}

/* 10.El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el
resto de la división entera del número de DNI y el número 23. 
A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:*/
function punto10(){
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

var numero = prompt("Introduce tu número de DNI (sin la letra) ");
var letra = prompt("Introduce la letra de tu DNI ( en mayúsulas) ");
letra = letra.toUpperCase();

    if(numero < 0 || numero > 99999999) {
        console.log ("El número proporcionado no es válido")
    }
    else{
        var letraCalculada = letras[numero %23];
        if (letraCalculada != letra){
            console.log("La letra o el número proporcionados no son correctos");
        }
        else{
            console.log("El número de DNI y su letra son correctos");
        }
    }
}



/*11.El factorial de un número entero n es una operación matemática que consiste en multiplicar
todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5(escrito como 5!) es igual a: 5! =
5 x 4 x 3 x 2 x 1 = 120 Utilizando la estructura for, crear un script que calcule el factorial de un
número entero. */
function punto11(){
let numero = prompt ("Introduce un número factorial: ");
let facrotial = numero;
let num = 1;
    for(let i = 1; i <= facrotial; i++){

        num *= i ;
        
    }

console.log(facrotial+"! = "+num);
}

/*12.Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado
 una cadena de texto que indica si el número es par o impar.*/
function punto12(){
 let num = prompt("Introduzca un número: ");

 let num1 = parseInt(num);

 if(num1 % 2 == 0 ){
    console.log("El número es par.");
 }else{
     console.log("El número es impar.");
 }

}
/*13.Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada 
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */
function punto13(){
let cadena = prompt("Introduce una cadena: ");

let cadenaM = cadena.toUpperCase;
let cadenam = cadena.toLowerCase;

    if(cadena == cadenaM){
        console.log("La cadena está en mayúsculas");
    }else if (cadena == cadenam){
        console.log ("la cadena esta en minusculas");
    }else if(cadena != cadenaM && cadenam != cadena){
        console.log("La cadena está compuesta por mayuculas y minusculas.");
    }

}

/*14.Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural". */

function punto14(){

    let str = prompt("Introduce una frase: ")

    let frasereves= str.split("").reverse().join("")

    if(frasereves == str){
        console.log("La frase es políndrome.")
    }else{
        console.log("la frase no es políndrome")
    }
}