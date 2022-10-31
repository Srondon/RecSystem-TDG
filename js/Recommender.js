//-> Versión 1.0 Idea de Prototipo #1

//-> Preguntas orientadoras OBLIGATORIAS
alert("PREGUNTAS OBLIGATORIAS");
var p1 = parseInt(window.prompt("¿Qué área del conocimiento es? 1.Español 2.Sociales 3.Matematicas"));
if(p1 == 1 || p1 == 2 || p1 == 3){ //En cualquier caso da puntaje
    p1 = 10;
}

var p2 = parseInt(window.prompt("¿Es una actividad para desarrollar dentro de clase? 1.Si 2.No"));
if(p2 == 1){ //Da mas puntaje si la actividad se hace en clase
    p2 = 10;
}else{
    p2=5;
}

var p3 = parseInt(window.prompt("¿Cuanto tiempo durará la actividad? 1.10-20min 2.20-30min 3.Mayor a 60 min"));
if(p3 == 1){
    p3 = 2;
}if(p3 == 2){
    p3 = 3;
}else{  //Quiero dar mas puntos a las actividades largas
    p3 = 5;
}

var p4 = parseInt(window.prompt("¿Para cuantos estudiantes está pensada la actividad? 1.2-15 2.20-30 3.Mas de 30"));
if(p4 == 1){
    p4 = 2;
}else{  //Doy mas puntos a las actividades que tengan mas puntos, para recomendar recursos "masivos"
    p4 = 5; 
}

var p5 = parseInt(window.prompt("¿Cual es el rango de edad del público objetivo? 1.18-28 2.28-48 3.48-59 4.Mayores de 60"));
if(p5 == 1){    //Doy mas puntos al rango de edad de personas mas jovenes, que tienen mayor posibilidad de usar facilmente los recursos
    p5 = 20;
}
if(p5 == 2){
    p5 = 20;
}else{ //Doy menos puntos a los mayores, para que se muestren las plataformas mas sencillas a este público
    p5 = 10;
}

var p6 = parseInt(window.prompt("¿Requiere uso del dispositivo móvil? 1.Si 2.No"));
if(p6 = 1){ //Solamente doy puntos a plataformas que requieran móviles, para portabilidad
    p6 = 15;
}else{      //No doy puntos si no se puede usar móviles
    p6 = 0;
}

var p7 = parseInt(window.prompt("Propósito de la actividad: 1.Evaluar 2.Participacion 3.Afianzar conocimientos"));
if(p7 == 1){ //Doy menos de puntos a los recursos de evaluación, ya que casi todos están orientados a examenes tipicos
    p7 = 10;
}
if(p7 == 2){ //Las plataformas que tenemos, estan mas orientadas a participar y Etc... FALTA AGREGAR las otras opciones de Juliana
    p7 = 20; //-> Esto es solo una prueba inicial
}
if(p7 == 20){
    p7 = 20;
}

var p8 = parseInt(window.prompt("¿Herramienta de uso libre, de paga o Freemium? 1.Libre 2.Freemium 3.Paga"));
if(p8 == 1 || p8 == 2){ //Le doy prioridad a los recursos de uso libre o freemium
    p8 = 15;
}else{
    p8 = 5;
}

var puntajeDocente = p1+p2+p3+p4+p5+p6+p7+p8;
console.log("Puntaje obtenido por el docente: " + puntajeDocente);


//-> Constructor del recurso web
/*Ejemplos de llenado:
nombre: Nombre del recurso web
categoria: Matematicas, quimica, historia... STRING
intencionUsuarioFinal: Evaluacion, comunicación interactiva, trabajo en equipo... (ver opciones profe Juliana)
tiempoAprendizaje: 10-20min, 20-30min, 60min en adelante
preRequisitos: Si, No BOOLEAN (referencia si necesita celular o no)
licencia: Uso libre, paga, freemium STRING (Dar claridad con el tema las licencias)
puntajeAsignado: Puntaje de 0 a 100 que yo le ponga a cada recurso INT
*/
function Recurso(nombre, categoria, intencionUsuarioFinal, tiempoAprendizaje, preRequisitos, licencia, puntajeAsignado){ 
    this.nombre;
    this.categoria;
    this.intencionUsuarioFinal;
    this.tiempoAprendizaje;
    this.preRequisitos;
    this.licencia;
    this.puntajeAsignado;
    //-> 6 Atributos en total
};

//-> Creo mis recursos como objetos
            //-> nombre, categoria, intencionUsuario, tiempoAprendizaje, preRequisitos, licencia, puntajeAsignado
const Recurso1 = ("¡Khoot!", "Juego", "Enseñanza", "30 Min", "Si", "Uso libre", 60);
const Recurso2 = ("Genially", "Presentaciones", "Creación", "30 Min", "Si", "Freemium", 80);

if(puntajeDocente <= 60){
    console.log("Se le recomienda al docente la plataforma: " + Recurso1.nombre);
    alert("Se ha hecho la recomendación!");
}
if(puntajeDocente >= 80){
    console.log("Se le recomienda al docente la plataforma: " + Recurso2.nombre);
    alert("Se ha hecho la recomendación!");
}