$(function(){
	var paso_anterior = 4;
	var paso_siguiente = 2;

	//Metodo que permite ir al paso anterior actualizando las secuencias de volver a presionar este boton
	$('#paso_anterior').click(function(){
		comportamientoPasos(paso_anterior);
	});

	//Metodo que permite ir al paso siguiente actualizando las secuencias de volver a presionar este boton
	$('#paso_siguiente').click(function(){
		comportamientoPasos(paso_siguiente);
	});

	//Metodo donde se toma el comportamiento comun de los bontones de navegabilidad anterior y siguiente
	function comportamientoPasos(paso){
		if(paso == 4){
			paso_anterior = 3;
			paso_siguiente = 1;
			$('#paso_anterior').html('Volver al paso 3');
			$('#paso_siguiente').html('ir al paso 1');
			$('#img_pasos').attr('src', 'img/paso4.png');
		}
		else if(paso == 3){
			paso_anterior = 2;
			paso_siguiente = 4;
			$('#paso_anterior').html('Volver al paso 2');
			$('#paso_siguiente').html('ir al paso 4');
			$('#img_pasos').attr('src', 'img/paso3.png');
		}
		else if(paso == 2){
			paso_anterior = 1;
			paso_siguiente = 3;
			$('#paso_anterior').html('Volver al paso 1');
			$('#paso_siguiente').html('ir al paso 3');
			$('#img_pasos').attr('src', 'img/paso2.png');
		}
		else if(paso == 1){
			paso_anterior = 4;
			paso_siguiente = 2;
			$('#paso_anterior').html('Volver al paso 4');
			$('#paso_siguiente').html('ir al paso 2');
			$('#img_pasos').attr('src', 'img/paso1.png');
		}
	}

});