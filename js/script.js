const options = document.getElementById("options");
const txtarea = document.getElementById("txtarea");
const copy = document.getElementById("copy");

// Función copiar area de texto
copy.addEventListener("click", () => {
  navigator.clipboard
    .writeText(txtarea.value)
    .then(() => {
      // Cambiar el texto del botón temporalmente
      const originalText = copy.textContent;
      copy.textContent = "¡Copiado!";

      // Restaurar el texto después de 2 segundos
      setTimeout(() => {
        copy.textContent = originalText;
      }, 1000);
    })
    .catch((err) => {
      console.error("Error al copiar el texto:", err);
    });
});

// Funcion switch
options.addEventListener("change", () => {
  switch (options.value) {
    case "general":
      txtarea.textContent = `
Buenxs xxx, xxx.

De acuerdo a la información del caso, se detalla lo siguiente:

- 
- 
- 

Quedamos atentxs a cualquier novedad.

Saludos.`;
      break;
    case "citrix":
      txtarea.textContent =
        "Se realiza instalación de Citrix\nSe ingresa el servidor de Citrix para iniciar sesión\nSe valida correcto ingreso y despliegue de aplicaciones Citrix";
      break;
    case "commvault":
      txtarea.textContent =
        "Se actualiza versión de Commvault\nSe ingresa al aplicativo con los datos del usuario\nSe valida correcto funcionamiento del aplicativo (servidor Medellín, Bogotá)";
      break;
    case "entrega":
      txtarea.textContent =
        "Se realiza instalación y configuración del equipo.\nSe instala equipo en el puesto asignado.\nEl usuario ingresa al equipo con sus credenciales\nSe garantiza el correcto uso del equipo y aplicaciones\nSe realiza acta de entrega de equipo.";
      break;
    case "fenix":
      txtarea.textContent =
        "Se realiza instalación de Fenix ATC\nEl usuario inicia sesión con sus credenciales\nSe valida el correcto despliegue del aplicativo";
      break;
    case "oracle":
      txtarea.textContent =
        "Se realiza instalación de Fenix Oracle\nSe copia y pega las carpetas y archivos en GTC Fenix\nEl usuario ingresa al aplicativo con sus credenciales\nSe valida correcto despliegue del aplicativo";
      break;
    case "office":
      txtarea.textContent =
        "Se realiza activación de Office 365\nSe valida correcto uso del paquete Office";
      break;
    case "mantenimiento":
      txtarea.textContent =
        "Se actualizan los controladores del sistema\nSe eliminan perfiles de usuarios antiguos\nSe desinstalan programas obsoletos\nSe reparan daños en memoria RAM\nSe reparan daños en el disco duro\nSe reinicia el equipo para guardar los cambios";
      break;
    default:
      txtarea.textContent = "";
  }
});
