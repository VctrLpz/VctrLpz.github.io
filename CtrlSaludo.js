"use strict"; /*sirve para que los elemntos que no cumplan con las caracterizicas deseadas los muestre como error */


/*creacion de la variable se debe poner la palabra var antes del nombre de esta*/
var forma = document.getElementById("forma"),  /* con la sentencia document.getElementById obtenemos un elemento del archvo de html
que en este caso sera el elemnto con id de forma de nuestro doc html y  el de salida   */
    salida = document.getElementById("salida"); /*en js no es nesesario declarar variable x variable se puden decalrar seguidas con una ","*/

forma.addEventListener("input", saluda, false); /*al la formulario que viene de html le agregaremos un manejador de eventos  */
/* el manejador de eventos tiene 3 parametros la entrada una fucion y un activador de tipo bool  que sirve para controlar el eventos true de arriba a abajo y  false en burbuja */

/*Creamos la funcion saluidar para mostrar el texto obtenido del formulario */
function saluda(){

	/*se declaran las variables de la funcion */
	/* nombre de la variables nueva , desde el formulario tomaremos un elemento// .value sirve para obtener el valor de ese elemnto y trim es para quitar los espacios   */
  var nombre1 = forma["nombre1"].value.trim(),
      nombre2 = forma["nombre2"].value.trim();

      /*motramos los datos de los elemtos de html */
      /*la funcion salida.texcontent muestra el contenido en un cuadro de texto  */
      /* para concatenar se utliza +antes del nombre de la variable que vamos a mostrar*/
  salida.textContent = "Saludos a "+nombre1 + " y "+ nombre2;   
}
