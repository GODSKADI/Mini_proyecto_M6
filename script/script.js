//Respuestas del Cuestionario
var resPregunta3 = "PC";
var resPregunta4t1 = "verdad";
var resPregunta4t2 = "permitido";

//Funcion que permite limpiar las preguntas seleccionadas
function limpiar(e){
  var btnLimpiar;
  if(e.srcElement){
    btnLimpiar = e.srcElement.id;
  }else if(e.target){
    btnLimpiar = e.target.id;
  }
  if(btnLimpiar == "btnLimp1"){
    var contador = 1;
    var numClass = document.getElementsByName('rp1');
    numClass = numClass.length;
    while(contador <= numClass){
      document.getElementById("rp1."+contador+"").checked = false;
      document.getElementById("rep1-"+contador+"").style.backgroundColor="";
      document.getElementById("checkP1."+contador+"").style.visibility="hidden"; 
      document.getElementById("crossP1."+contador+"").style.visibility="hidden";
      contador++;
    }
  }if(btnLimpiar == "btnLimp2"){
    var contador = 1;
    var numClass = document.getElementsByName('rp2');
    numClass = numClass.length;
    while(contador <= numClass){
      document.getElementById("rp2."+contador+"").checked = false;
      document.getElementById("rep2-"+contador+"").style.backgroundColor="";
      document.getElementById("checkP2."+contador+"").style.visibility="hidden"; 
      document.getElementById("crossP2."+contador+"").style.visibility="hidden";
      contador++;
    }
  }if(btnLimpiar == "btnLimp3"){
    document.getElementById("textArea").value = "";
    document.getElementById("repText").style.backgroundColor = ""; 
  }if(btnLimpiar == "btnLimp4"){
    document.getElementById("rp4.1").value = "";
    document.getElementById("rp4.2").value = "";
    document.getElementById("checkP4.1").style.visibility="hidden"; 
    document.getElementById("crossP4.1").style.visibility="hidden";
    document.getElementById("multiTextRep").style.backgroundColor = ""; 

  }
}
//Funcion que verifica las respuestas contestadas de las preguntas
var contador_interno1 = 0;
var contador_interno2 = 0;
var contador_interno3 = 0;
var contador_interno4 = 0;
function verificar(e){
  var btnVerificar;
  if(e.srcElement){
    btnVerificar = e.srcElement.id;
  }else if(e.target){
    btnVerificar = e.target.id;
  }
  if(btnVerificar == "btnVer1"){
    if(document.getElementById("rp1.3").checked == true){
        document.getElementById("rp1.3").className = "rpCo";
      document.getElementById("checkP1.3").style.visibility = "visible"; 
      document.getElementById("rep1-3").style.backgroundColor = "GreenYellow"; 
           
    }else if(document.getElementById("rp1.1").checked == true){
          document.getElementById("rp1.3").className = "rpIn";
      document.getElementById("crossP1.1").style.visibility = "visible";
      document.getElementById("rep1-1").style.backgroundColor = "#ff8080"; 
          
    }else if(document.getElementById("rp1.2").checked == true){
          document.getElementById("rp1.2").className = "rpIn";
      document.getElementById("crossP1.2").style.visibility = "visible";
      document.getElementById("rep1-2").style.backgroundColor = "#ff8080";
    }
    contador_interno1++;
    document.getElementById("intentoInterno1").innerHTML = contador_interno1;
  }
  else if(btnVerificar == "btnVer2"){
    if(document.getElementById("rp2.2").checked == true){
        document.getElementById("checkP2.1").style.visibility = "visible";
    }else if(document.getElementById("rp2.1").checked == true){
          document.getElementById("crossP2.1").style.visibility = "visible";
    }
    contador_interno2++;
    document.getElementById("intentoInterno2").innerHTML = contador_interno2;
  }
  else if(btnVerificar == "btnVer3"){
    document.getElementById("resP3").innerHTML = "PC";
    document.getElementById("repText").style.backgroundColor = "#fff757"; 
    contador_interno3++;
    document.getElementById("intentoInterno3").innerHTML = contador_interno3;
  }
  else if(btnVerificar == "btnVer4"){
    if(document.getElementById("rp4.1").value == resPregunta4t1 && document.getElementById("rp4.2").value == resPregunta4t2){
        document.getElementById("checkP4.1").style.visibility = "visible";
      document.getElementById("multiTextRep").style.backgroundColor = "GreenYellow"; 
    }else{
          document.getElementById("crossP4.1").style.visibility = "visible";
      document.getElementById("multiTextRep").style.backgroundColor = "#ff8080"; 
    }
    contador_interno4++;
    document.getElementById("intentoInterno4").innerHTML = contador_interno4;
  }
  intentoGlobal();
}
//Funcion que lleva la cuenta de intentos realizados
//Variable intentos
function intentoGlobal(){
  var intentoGlobal = contador_interno1 + contador_interno2 + contador_interno3 + contador_interno4;
  document.getElementById("intentoGlobal").innerHTML = intentoGlobal;
}
