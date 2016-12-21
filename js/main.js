
$('#myModal').modal('show')

$("#select-continent").on("change",function(e){
	var continent = $(this).val();
	var marcas = { 'viville': false, 'vvie': false, 'vivorganik': false };
	var areas = {'mexico': false, 'estados_unidos': false, 'reino_unido': false};

	switch(continent){
		case "nort_america":
			areas.mexico = true;
			areas.estados_unidos = true;
			break;
		case "latinoamerica":
			areas.mexico = true;
			break;
		default:
			areas.reino_unido = true;
	}

	if(areas.mexico){
		marcas.viville = true;
		marcas.vivorganik = true;
	}

	if(areas.estados_unidos){
		marcas.vvie = true;
		marcas.vivorganik = true;
	}

	if(areas.reino_unido){
		marcas.vvie = true;
		marcas.vivorganik = true;
	}

	if(marcas.vvie){
		$(".logo-vvie").fadeIn();
	}else{
		$(".logo-vvie").fadeOut();
	}

	if(marcas.viville){
		$(".logo-vivell").fadeIn();
	}else{
		$(".logo-vivell").fadeOut();
	}

	if(marcas.vivorganik){
		$(".logo-vivorganik").fadeIn();
	}else{
		$(".logo-vivorganik").fadeOut();
	}

});