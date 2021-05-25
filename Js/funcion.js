"use strict"; 
var forma = document.getElementById("forma");

var salidaC=document.getElementById("salidaclave"),
	salidaN=document.getElementById("salidanombre"),
  salidaG= document.getElementById("salidagrupo"),
  salidaM= document.getElementById("salidamateria");
var txtFecha = forma["fecha"],
  salidaFecha = document.getElementById("salidaFecha");

function pantalla(){
var boleta = forma["boleta"].value.trim(),
      nombre = forma["nombre"].value.trim(),
      grupo= forma["grupo"].value.trim(),
      materia= forma["materia"].value.trim();

salidaC.textContent = "Boleta: "+boleta;
salidaN.textContent = "Nombre: "+nombre;
salidaG.textContent = "Grupo: "+grupo;
salidaM.textContent = "Materia : "+materia;

var
    fecha = new Date(txtFecha.value);
    salidaFecha.textContent = "Fecha:" + fecha.toGMTString();
 
 	  
}
