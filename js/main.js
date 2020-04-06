$(document).ready(function($) {
	//codigo

	var cajaLetra = $("#letra");
	var cajaJuego = $("#caja");
	var contador = 0;
	var abecedario = ["A","B","C","D","E","F"];
	var palabras = [coche = ["C","O","C","H","E"],
					"MAR",
					"LAGARTO",
					"PERRO",
					"AZUL",
					"PROGRAMADOR"];

	console.log(palabras);

//itero para crear las multiples cajas de la sopa de letras con sus respectivas letras aleatorias
for (var contador = 0; contador <= 239; contador++) {
	
	var aleatorio = String(Math.floor(Math.random() * 6));
	console.log(aleatorio);
	var strContador = contador.toString();
	console.log(strContador);

	cajaJuego.append(`<div id="letra`+strContador+`" class="letra">`+abecedario[aleatorio]+`</div>`);


	cajaJuego.append(`<div id="letra0`)



};


});



