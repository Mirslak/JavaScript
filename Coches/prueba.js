function hola(){
    let palabras = prompt("Recojo palabras, dime una:");

    alert("Tu palabra ha sido: "+palabras);
}
function boton(){
    alert("Hola soy un botón.");
}
let button = document.createElement("button");
button.innerHTML = "Pulsame puto";
document.getElementById("boton").appendChild(button);



button.addEventListener("click", boton, false);

function recoge(){
    let nombre = document.getElementById("cosa").value;
    alert(nombre);
}