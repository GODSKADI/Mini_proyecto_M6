//Respuestas del Cuestionario
var respuesta1 = "rp1.3";
var respuesta2 = "rp2.3";
var respuesta3 = "PC";
//Funcion que comprueba las respuestas para saver si son correctas o incorrectas
function comprobarRespuestas(e){
}

//Funcion que permite limpiar las preguntas seleccionadas
function limpiar(e){
  var btnLimpiar;
  if(e.srcElement){
    btnLimpiar = e.srcElement.id;
  }else if(e.target){
    btnLimpiar = e.target.id;
  }
  if(btnLimpiar == "btn1"){
    var contador = 1;
    var numClass = document.getElementsByClassName('rp1');
    numClass = numClass.length;
    while(contador <= numClass){
      document.getElementById("rp1."+contador+"").checked = false;
      contador++;
    }
  }else if(btnLimpiar == "btn3"){
    var contador = 1;
    var numClass = document.getElementsByClassName('rp2');
    numClass = numClass.length;
    while(contador <= numClass){
      document.getElementById("rp2."+contador+"").checked = false;
      contador++;
    }
  }else if(btnLimpiar == "btn5"){
    document.getElementById("textArea").value = "";
  }
}
//Funcion que lleva la cuenta de intentos realizados
//Variable intentos

intentos = 0;
function intentos(){

}
