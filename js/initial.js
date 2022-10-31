let btnRecomendar = document.getElementById("btn-continuar");
btnRecomendar.addEventListener("click", obtenerDatos);

let pDocente = localStorage.getItem("totalPoints");
console.log("Puntaje docente inicial: " + pDocente);

function obtenerDatos(){
    //--> Obtención de datos del HTML
    //-> Pregunta 01
    let p1 = document.querySelector('#pregunta1').value;
    //-> Pregunta 02
    let p2 = document.querySelector('input[name="actividadClase"]:checked').value;
    //-> Pregunta 03
    let p3 = document.querySelector('#pregunta3').value;
    //-> Pregunta 04
    let p4 = document.querySelector('#pregunta4').value;
    //-> Pregunta 05
    let p5 = document.querySelector('#pregunta5').value;
    //-> Pregunta 06
    let p6 = document.querySelector('input[name="flexRadioCelular"]:checked').value;
    //-> Pregunta 07
    let p7 = document.querySelector('#pregunta7').value;
    //-> Pregunta 08
    let p8 = document.querySelector('#pregunta8').value;

        //-> Muestro los valores obtenidos del HTML en la consola
        console.log(" -- Valores obtenidos de las preguntas al docente -- ");
        console.log("Área de conocimiento: " + p1)
        console.log("Actividad en clase: " + p2);
        console.log("Tiempo de la actividad: " + p3);
        console.log("Cantidad de estudiantes: " + p4);
        console.log("Rango de edad objetivo: " + p5);
        console.log("Requiere uso de móvil: " + p6);
        console.log("Proposito de la actividad: " + p7);
        console.log("Tipo de licencia: " + p8);

    //--> Creación de variables para asignar puntaje al HTML
    var puntajeP1 = 0;
    var puntajeP2 = 0;
    var puntajeP3 = 0;
    var puntajeP4 = 0;
    var puntajeP5 = 0;
    var puntajeP6 = 0;
    var puntajeP7 = 0;
    var puntajeP8 = 0;
    var puntajeDocente = 0;

    if(p1 == 0){
        console.log("Pregunta 1 sin responder");
    }else{
        puntajeP1 = 10; 
        /*      En cualquier caso doy puntos [Por ahora]
        NOTA: Cuando cree los recursos, debo darles un valor asignado dependiendo de la materia en la que trabaje el recurso
        Porque NO puedo recomendar una plataforma de debates a alguien que quiere obtener plataformas de matematicas o 
        alguna otra materia.    
        */
    }

    if(p2 == 0){
        console.log("Pregunta 2 sin responder");
    }if(p2 == 1){
        puntajeP2 = 10;  // Mas puntos para actividades en clase
    }else{
        puntajeP2 = 5; // Menos puntos para actividades que no se hacen durante las clases
    }

    if(p3 == 0){
        console.log("Pregunta 3 sin responder");
    }if(p3 == 1 || p3 == 2){
        puntajeP3 = 3; // Menos puntos para actividades cortas
    }else{
        puntajeP3 = 5; // Mas puntos a actividades mas largas
    }

    if(p4 == 0){
        console.log("Pregunta 4 sin responder");
    }if(p4 == 1 || p4 == 2){
        puntajeP4 = 2;  // Menos puntos para menor cantidad de estudiantes
    }else{
        puntajeP4 = 5; // Mas puntos para mayor cantidad de estudiantes
    }

    if(p5 == 0){
        console.log("Pregunta 5 sin responder");
    }if(p5 == 1 || p5 == 2){
        puntajeP5 = 20;  // Mas puntos para la plobación mas joven
    }else{
        puntajeP5 = 10; // Menos puntos para la plobación menos joven
    }

    if(p6 == 0){
        console.log("Pregunta 6 sin responder");
    }if(p6 == 1){
        puntajeP6 = 15; // Usa móviles
    }else{
        puntajeP6 = 0; // No usa móviles
    }

    if(p7 == 0){
        console.log("Pregunta 7 sin responder");
    }if(p7 == 1 || p7 == 7){
        puntajeP7 = 10; // Evaluacion y simulacros doy menos puntos
        /*  
            NOTA:
            Esto lo debo contrastar (al igual que todas las preguntas) para validar realmente
            cuales son las actividades que los docentes danían mayor puntaje.
        */ 

    }else{
        puntajeP7 = 20;  // Para el resto de actividades doy mas puntos
    }

    if(p8 == 0){
        console.log("Pregunta 8 sin responder");
    }if(p8 == 1 || p8 == 3){
        puntajeP8 = 15;  // Da mas puntos si uso licencias libres o Freemium
    }else{
        puntajeP8 = 5;  // Menos puntos para licencias de paga
    }

    puntajeDocente = puntajeP1+puntajeP2+puntajeP3+puntajeP4+puntajeP5+puntajeP6+puntajeP7+puntajeP8;    
    console.log("\n Puntaje del docente resultante: " + puntajeDocente);    
    localStorage.setItem("totalPoints", puntajeDocente);

    setTimeout(function(){
        location.href="results.html";
    }, 1000 * 2);
    

}