
const myTimeout = setTimeout(mostrarSaludo, 3000);

function mostrarSaludo() {
document.getElementById("saludos").style.visibility="visible";
}

let body = document.querySelector("img");
body.addEventListener("click", ocultarSaludo);


