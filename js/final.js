//-> Validación para que el usuario no pueda acceder a la página de recomendaciones sin un puntaje obtenido
let pDocente = localStorage.getItem("totalPoints");
if(pDocente == null || pDocente == 0){
location.href="index.html";
}else{
    console.log("Validación realizada.");
}

//-> Muestro el puntaje obtenido en consola y lo muestro en el HTML
console.log("---- Esta es la página de recomendaciones ---- ");
console.log("Puntaje obtenido por el docente: " + pDocente);
document.getElementById("puntaje").innerHTML = localStorage.getItem("totalPoints");

//-> Elimino el puntaje obtenido del docente después de validar que existe
localStorage.clear();
console.log("Puntaje eliminado: " + pDocente);