//declarar caja de datos

//funcion iniciar
//obtener la caja de datos desde el documento
//obtener el botón desde el documento
//agregar al boton un oyente de evento al hacer click ejecutar la funcion leer

//función leer
//declarar url y archivo de donde tomar los datos
//declarar solicitud como new XMLHttpRequest()
//agregar a solicitud un oyente de evento pra que durante la carga se ejecute la función mostrar
//configurar la solicitud con open()
//ejecutar la solicitud sin envío de datos

//función mostrar(e)
//declarar variable datos = e.objetivo
//si estado de los datos es igual a 200
//caja de datos es igual a respuesta de los datos

//Agregar oyente de eventos al cargar ejecutar ejecutar la función iniciar

var cajadatos;

function iniciar()
{
	cajadatos = document.getElementById('cajadatos');
	boton = document.getElementById('boton');
	boton.addEventListener('click', enviar);
}

function enviar()
{
	var data = new FormData();
	data.append('base', 8);
	data.append('altura', 5);

	var url = "calcular.php"
	var solicitud = new XMLHttpRequest();
	
	solicitud.addEventListener('load', mostrar);
	solicitud.open("POST", url, true);
	solicitud.send(data);
}

function mostrar(e)
{
	var datos = e.target;
	
	if(datos.status == 200)
	{
		cajadatos.innerHTML = datos.responseText;
		
	}
}

addEventListener('load', iniciar);
