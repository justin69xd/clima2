var $contenedorCiudad = $("#ciudad"),
	$contenedorPais = $("#pais"),
	$reloj = $("#reloj"),
	$tarjetaPrincipal = $("#tarjeta_principal"),
	$encabezados = $("h2,h3,h4"),
	horaNoche = 19,
	horaTarde = 12,
	horaDia = 7,
	todasLasClasesTarjeta = "blue amber darken-3 brown darken-1",
	todasLasClasesTitulos = "black-text white-text";
$(principal);
function es_dia(hora){
	return hora >= horaDia && hora < horaTarde;
}
function es_tarde(hora){
	return hora >= horaTarde && hora < horaNoche;
}
function es_noche(hora){
	return (hora >= horaNoche && hora <= 24) || (hora >= 0 && hora <= horaDia);
}
function refrescar_colores(hora){
	if(es_dia(hora)){
		$tarjetaPrincipal.removeClass(todasLasClasesTarjeta).addClass("blue");
		$encabezados.removeClass(todasLasClasesTitulos).addClass("white-text")
	}else if(es_tarde(hora)){
		$tarjetaPrincipal.removeClass(todasLasClasesTarjeta).addClass("amber darken-3");
		$encabezados.removeClass(todasLasClasesTitulos).addClass("white-text")
	}else if(es_noche(hora)){
		$tarjetaPrincipal.removeClass(todasLasClasesTarjeta).addClass("brown darken-1");
		$encabezados.removeClass(todasLasClasesTitulos).addClass("black-text")
	}
}
function refrescar_reloj() {
    var hoy = new Date();
    var h = hoy.getHours();
    var m = hoy.getMinutes();
    var s = hoy.getSeconds();
    m = arreglar_cantidad(m);
    s = arreglar_cantidad(s);
	refrescar_colores(h);
    $reloj.text(h + ":" + m + ":" + s);
    setTimeout(refrescar_reloj, 500);
}
function arreglar_cantidad(i) {
	return (i < 10) ? "0" + i : i;
}

function principal(){
	/*
	var a = 0;
	setInterval(function(){
		refrescar_colores(a);
		console.log("La hora es %s", a);
	$reloj.text("Probando hora: " + a)
		if(a >= 24) a = 0;
		a++;
	}, 1000);*/
	refrescar_reloj()
	coordenadas_a_partir_de_ip();
}
function datos_de_clima_a_partir_de_coordenadas(latitud, longitud, callback, clave_api){
	clave_api = clave_api || "c3560fd0b6d75d0145c3ee4d505e439b";
	callback = callback || function(d){
		console.info("Clima:", d)
	}
	var cadena = 
		"http://api.openweathermap.org/data/2.5/weather?" 
		+ 
		$.param(
			{
				lat: latitud,
				lon: longitud,
				appid: clave_api
			}
		);
	$.get(cadena, function(datos){
		callback(datos);
	});
}
function traduccionClima(id){
	var condicionesDelClima = "";
	switch(id){
			/*
				Tormenta
			*/
		case 200:
			condicionesDelClima = "";
			break;
		case 201:
			condicionesDelClima = "";
			break;
		case 202:
			condicionesDelClima = "";
			break;
		case 210:
			condicionesDelClima = "";
			break;
		case 211:
			condicionesDelClima = "";
			break;
		case 212:
			condicionesDelClima = "";
			break;
		case 221:
			condicionesDelClima = "";
			break;
		case 230:
			condicionesDelClima = "";
			break;
		case 232:
			condicionesDelClima = "";
			break;
			/*
				Llovizna
			*/
		
		case 300:
			condicionesDelClima = "";
			break;
		case 301:
			condicionesDelClima = "";
			break;
		case 302:
			condicionesDelClima = "";
			break;
		case 310:
			condicionesDelClima = "";
			break;
		case 311:
			condicionesDelClima = "";
			break;
		case 312:
			condicionesDelClima = "";
			break;
		case 313:
			condicionesDelClima = "";
			break;
		case 314:
			condicionesDelClima = "";
			break;
		case 321:
			condicionesDelClima = "";
			break;
			/*
				Lluvia
			*/
			
			
		case 500:
			condicionesDelClima = "";
			break;
		case 501:
			condicionesDelClima = "";
			break;
		case 502:
			condicionesDelClima = "";
			break;
		case 503:
			condicionesDelClima = "";
			break;
		case 504:
			condicionesDelClima = "";
			break;
		case 511:
			condicionesDelClima = "";
			break;
		case 520:
			condicionesDelClima = "";
			break;
		case 521:
			condicionesDelClima = "";
			break;
		case 522:
			condicionesDelClima = "";
			break;
		case 531:
			condicionesDelClima = "";
			break;
			
			/*
				Nieve
			*/
			
		case 600:
			condicionesDelClima = "";
			break;
		case 601:
			condicionesDelClima = "";
			break;
		case 602:
			condicionesDelClima = "";
			break;
		case 611:
			condicionesDelClima = "";
			break;
		case 612:
			condicionesDelClima = "";
			break;
		case 615:
			condicionesDelClima = "";
			break;
		case 616:
			condicionesDelClima = "";
			break;
		case 620:
			condicionesDelClima = "";
			break;
		case 621:
			condicionesDelClima = "";
			break;
		case 622:
			condicionesDelClima = "";
			break;
			
			/*
				Atmósfera
			*/
			
			
		case 701:
			condicionesDelClima = "";
			break;
		case 711:
			condicionesDelClima = "";
			break;
		case 721:
			condicionesDelClima = "";
			break;
		case 731:
			condicionesDelClima = "";
			break;
		case 741:
			condicionesDelClima = "";
			break;
		case 751:
			condicionesDelClima = "";
			break;
		case 761:
			condicionesDelClima = "";
			break;
		case 762:
			condicionesDelClima = "";
			break;
		case 771:
			condicionesDelClima = "";
			break;
		case 781:
			condicionesDelClima = "";
			break;
			
			/*
				Limpio
			*/
			
		case 800:
			condicionesDelClima = "";
			break;
			
			/*
				Nubes
			*/
			
		case 801:
			condicionesDelClima = "";
			break;
		case 802:
			condicionesDelClima = "";
			break;
		case 803:
			condicionesDelClima = "";
			break;
		case 804:
			condicionesDelClima = "";
			break;
			
			/*
				Extremo
			*/
			
			
		case 900:
			condicionesDelClima = "";
			break;
		case 901:
			condicionesDelClima = "";
			break;
		case 902:
			condicionesDelClima = "";
			break;
		case 903:
			condicionesDelClima = "";
			break;
		case 904:
			condicionesDelClima = "";
			break;
		case 905:
			condicionesDelClima = "";
			break;
		case 906:
			condicionesDelClima = "";
			break;
			
			/*
				Adicional
			*/
			
		case 951:
			condicionesDelClima = "";
			break;
		case 952:
			condicionesDelClima = "";
			break;
		case 953:
			condicionesDelClima = "";
			break;
		case 954:
			condicionesDelClima = "";
			break;
		case 955:
			condicionesDelClima = "";
			break;
		case 956:
			condicionesDelClima = "";
			break;
		case 957:
			condicionesDelClima = "";
			break;
		case 958:
			condicionesDelClima = "";
			break;
		case 959:
			condicionesDelClima = "";
			break;
		case 960:
			condicionesDelClima = "";
			break;
		case 961:
			condicionesDelClima = "";
			break;
		case 962:
			condicionesDelClima = "";
			break;
			 }
}
function coordenadas_a_partir_de_ip(callback){
	callback = callback || function(latitud, longitud, ciudad, pais){
		$contenedorCiudad.text(ciudad);
		$contenedorPais.text(pais);
		datos_de_clima_a_partir_de_coordenadas(latitud, longitud);
	}
	$.get("http://ip-api.com/json", function(datos){
		if(datos.status === "success"){
			var latitud = datos.lat,
				longitud = datos.lon,
				ciudad = datos.city,
				pais = datos.country;
			callback(latitud, longitud, ciudad, pais);
		}
	});
}