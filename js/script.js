function mostrarTexto(){
    const option = document.getElementById("option");
    const txtarea = document.getElementById("txtarea");

    switch(option.value) {
        case "citrix":
            txtarea.textContent = "Se realiza instalación de Citrix\nSe ingresa el servidor de Citrix para iniciar sesión\nSe valida correcto ingreso y despliegue de aplicaciones Citrix";
            break;
        case "commvault":
            txtarea.textContent = "Se actualiza versión de Commvault\nSe ingresa al aplicativo con los datos del usuario\nSe valida correcto funcionamiento del aplicativo (servidor Medellín, Bogotá)";
            break;
        case "entrega":
            txtarea.textContent = "Se realiza instalación y configuración del equipo.\nSe instala equipo en el puesto asignado.\nEl usuario ingresa al equipo con sus credenciales\nSe garantiza el correcto uso del equipo y aplicaciones\nSe realiza acta de entrega de equipo.";
            break;
        case "fenix":
            txtarea.textContent = "Se realiza instalación de Fenix ATC\nEl usuario inicia sesión con sus credenciales\nSe valida el correcto despliegue del aplicativo";
            break;
        case "oracle":
            txtarea.textContent = "Se realiza instalación de Fenix Oracle\nSe copia y pega las carpetas y archivos en GTC Fenix\nEl usuario ingresa al aplicativo con sus credenciales\nSe valida correcto despliegue del aplicativo";
            break;
        case "office":
            txtarea.textContent = "Se realiza activación de Office 365\nSe valida correcto uso del paquete Office";
            break;
        case "mantenimiento":
            txtarea.textContent = "Se actualizan los controladores del sistema\nSe eliminan perfiles de usuarios antiguos\nSe desinstalan programas obsoletos\nSe reparan daños en memoria RAM\nSe reparan daños en el disco duro\nSe reinicia el equipo para guardar los cambios";
            break;
        default:
            txtarea.textContent = "";
    }
}

// Copiar texto
function copiarTexto() {
    // Selecciona el área de texto
    const txtarea = document.getElementById("txtarea");

    // Selecciona el texto dentro del área de texto
    txtarea.select();
    txtarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copia el texto al portapapeles
    document.execCommand("copy");

    // Muestra un mensaje de éxito
    const mensaje = document.getElementById("mensaje");
	mensaje.style.display = "block";
    // mensaje.innerHTML = "Texto copiado🥳";

    // Oculta el mensaje después de 2 segundos
    setTimeout(() => {
		mensaje.style.display = "none";
	}, 2000);
}