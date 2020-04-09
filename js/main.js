$(document).ready(function($) {

	//var cajaLetra = $("#letra");
	var cajaJuego = $("#cajaJuego");
	var contador = 0;
	var abecedario = ["A","B","C","D","E","F"];
	var palabras = [coche = ["C","O","C","H","E"],
					"MAR",
					"LAGARTO",
					"PERRO",
					"AZUL",
					"PROGRAMADOR"];


	//Instancio la función generar la cudricula
	generarCuadricula(contador, abecedario);
	
	//itero para crear las multiples cajas de la sopa de letras con sus respectivas letras aleatorias
	function generarCuadricula(contador, abecedario){

		for (var contador = 0; contador <= 239; contador++) {
			
			var arrayDivsLetras = [];
			var cajaLetra = $(".letra");
			var aleatorio = String(Math.floor(Math.random() * 6));
			var strContador = contador.toString();

			cajaJuego.append('<div id="letra'+strContador+'" class="letra">'+abecedario[aleatorio]+'</div>');
			cajaJuego.append(`<div id="letra0`);

			arrayDivsLetras.push(cajaLetra);
			console.log(arrayDivsLetras);

		};

		console.log(arrayDivsLetras[0][0]);
		generarPalabras(palabras,cajaJuego,arrayDivsLetras);
	};


	function generarPalabras(palabras,cajaJuego,arrayDivsLetras){

		var id = 0;
		var imprime = "";
		//console.log(cajaLetra.html());

		for (var id = 0; id <= 239; id++){

			var elementoArray = arrayDivsLetras[0][id];
			var idLetra = $("#letra"+id).attr("id");
			var fondo = $("#letra0").attr('background-color');
			console.log(fondo);
			var imprime = "";
			var contLetras = 0;
			
			
			switch(idLetra){

				//Palabra coche
				case "letra0":
					

					imprime = $("#letra0").html("C");
					imprime.mousedown(function(event) {
						//$("#letra0").css('background-color','green');
						if(contLetras == 0){
							contLetras++;
							console.log(contLetras);
						}
					});
				break;
				case "letra15":
					imprime = $("#letra15").html("O");
							
						
							imprime.hover(function(event) {
								//$("#letra15").css('background-color','green');
								if(contLetras == 1){
									contLetras++;
									console.log(contLetras);
								}
							});		
				break;
				case "letra30":
					
						imprime = $("#letra30").html("C");
						
						imprime.hover(function(event) {
							//$("#letra30").css('background-color','green');
							if(contLetras == 2){
								contLetras++;
								console.log(contLetras);
							}
						});
				break;
				case "letra45":
					imprime = $("#letra45").html("H");
					imprime.hover(function(event) {
						//$("#letra45").css('background-color','green');
						if(contLetras == 3){
							contLetras++;
							console.log(contLetras);
						}
					});
				break;
				case "letra60":
					imprime = $("#letra60").html("E");
					imprime.mouseup(function(event) {
						contLetras++;
						console.log(contLetras);
						if(contLetras == 5){

							$("#letra0").css('background-color','green');
							$("#letra15").css('background-color','green');
							$("#letra30").css('background-color','green');
							$("#letra45").css('background-color','green');
							$("#letra60").css('background-color','green');

							contLetras = 0;
							console.log(contLetras);	

						}
					});
				break;


				//Palabra mar
				case "letra38":
					
					imprime = $("#letra38").html("M");
					imprime.mousedown(function(event){
						if(contLetras == 0){
							contLetras++;
							console.log(contLetras);
						}
					});	

				break;
				case "letra53":
					imprime = $("#letra53").html("A");
					imprime.hover(function(event){
						if(contLetras == 1){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra68":
					imprime = $("#letra68").html("R");
					imprime.mouseup(function(event) {
						contLetras++;
						console.log(contLetras);
						if(contLetras == 3){

							$("#letra38").css('background-color','green');
							$("#letra53").css('background-color','green');
							$("#letra68").css('background-color','green');
							
							contLetras = 0;

						}
					});
				break;
				
				//Palabra lagarto
				case "letra5":
					imprime = $("#letra5").html("L");
					imprime.mousedown(function(event){
						if(contLetras == 0){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra6":
					imprime = $("#letra6").html("A");
					imprime.hover(function(event){
						if(contLetras == 1){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra7":
					imprime = $("#letra7").html("G");
					imprime.hover(function(event){
						if(contLetras == 2){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra8":
					imprime = $("#letra8").html("A");
					imprime.hover(function(event){
						if(contLetras == 3){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra9":
					imprime = $("#letra9").html("R");
					imprime.hover(function(event){
						if(contLetras == 4){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra10":
					imprime = $("#letra10").html("T");
					imprime.hover(function(event){
						if(contLetras == 5){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra11":
					imprime = $("#letra11").html("O");
					imprime.mouseup(function(event) {
						contLetras++;
						console.log(contLetras);
						if(contLetras == 7){

							$("#letra5").css('background-color','green');
							$("#letra6").css('background-color','green');
							$("#letra7").css('background-color','green');
							$("#letra8").css('background-color','green');
							$("#letra9").css('background-color','green');
							$("#letra10").css('background-color','green');
							$("#letra11").css('background-color','green');
							
							contLetras = 0;

						}
					});
				break;

				//Palabra perro
				case "letra59":
					imprime = $("#letra59").html("P");
					imprime.mousedown(function(event){
						if(contLetras == 0){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra74":
					imprime = $("#letra74").html("E");
					imprime.hover(function(event){
						if(contLetras == 1){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra89":
					imprime = $("#letra89").html("R");
					imprime.hover(function(event){
						if(contLetras == 2){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra104":
					imprime = $("#letra104").html("R");
					imprime.hover(function(event){
						if(contLetras == 3){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra119":
					imprime = $("#letra119").html("O");
					imprime.mouseup(function(event) {
						contLetras++;
						console.log(contLetras);
						if(contLetras == 5){

							$("#letra59").css('background-color','green');
							$("#letra74").css('background-color','green');
							$("#letra89").css('background-color','green');
							$("#letra104").css('background-color','green');
							$("#letra119").css('background-color','green');
							
							
							contLetras = 0;

						}
					});
				break;

				//Palabra azul
				case "letra213":
					imprime = $("#letra213").html("A");
					imprime.mousedown(function(event){
						if(contLetras == 0){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra214":
					imprime = $("#letra214").html("Z");
					imprime.hover(function(event){
						if(contLetras == 1){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra215":
					imprime = $("#letra215").html("U");
					imprime.hover(function(event){
						if(contLetras == 2){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra216":
					imprime = $("#letra216").html("L");
					imprime.mouseup(function(event) {
						contLetras++;
						console.log(contLetras);
						if(contLetras == 4){

							$("#letra213").css('background-color','green');
							$("#letra214").css('background-color','green');
							$("#letra215").css('background-color','green');
							$("#letra216").css('background-color','green');
							
							
							contLetras = 0;

						}
					});
				break;
				


				//Palabra programador
				case "letra64":
					imprime = $("#letra64").html("P");
					imprime.mousedown(function(event){
						if(contLetras == 0){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra80":
					imprime = $("#letra80").html("R");
					imprime.hover(function(event){
						if(contLetras == 1){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra96":
					imprime = $("#letra96").html("O");
					imprime.hover(function(event){
						if(contLetras == 2){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra112":
					imprime = $("#letra112").html("G");
					imprime.hover(function(event){
						if(contLetras == 3){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra128":
					imprime = $("#letra128").html("R");
					imprime.hover(function(event){
						if(contLetras == 4){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra144":
					imprime = $("#letra144").html("A");
					imprime.hover(function(event){
						if(contLetras == 5){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra160":
					imprime = $("#letra160").html("M");
					imprime.hover(function(event){
						if(contLetras == 6){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra176":
					imprime = $("#letra176").html("A");
					imprime.hover(function(event){
						if(contLetras == 7){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra192":
					imprime = $("#letra192").html("D");
					imprime.hover(function(event){
						if(contLetras == 8){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra208":
					imprime = $("#letra208").html("O");
					imprime.hover(function(event){
						if(contLetras == 9){
							contLetras++;
							console.log(contLetras);
						}
					});	
				break;
				case "letra224":
					imprime = $("#letra224").html("R");
					imprime.mouseup(function(event) {
						contLetras++;
						console.log(contLetras);
						if(contLetras == 11){

							$("#letra64").css('background-color','green');
							$("#letra80").css('background-color','green');
							$("#letra96").css('background-color','green');
							$("#letra112").css('background-color','green');
							$("#letra128").css('background-color','green');
							$("#letra144").css('background-color','green');
							$("#letra160").css('background-color','green');
							$("#letra176").css('background-color','green');
							$("#letra192").css('background-color','green');
							$("#letra208").css('background-color','green');
							$("#letra224").css('background-color','green');
							
							
							contLetras = 0;

						}
					});
				break;

				
				
			}
				
			
		}


		
	};

});

