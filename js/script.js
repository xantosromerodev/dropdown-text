function mostrarTexto(){
    const option = document.getElementById("option");
    const txtarea = document.getElementById("txtarea");

    switch(option.value) {
        case "email":
            txtarea.textContent = 
            "cristhian.castrillon@comware.com.co\npablo.montalvo@comware.com.co\nariel.ochoa@comware.com.co\njuan.pelaez@comware.com.co\ncarlos.urrego@comware.com.co\njohne.correa@comware.com.co\ndeivyds.martinez@comware.com.co\ndaniel.gil@comware.com.co\neliana.ceballos@comware.com.co\nmaria.cortes@comware.com.co\nrenzo.linares@comware.com.co\nerich.sanchez@comware.com.co";
            break;
        case "fenix":
            txtarea.textContent = "Se realiza el cambio de servidor para Fenix ATC.\nSe ingresa al aplicativo con los datos del usuario.\nSe valida correcto despliegue y funcionamiento del aplicativo.";
            break;
        case "office":
            txtarea.textContent = "Se realiza activación de Office.\nSe valida correcto funcionamiento.";
            break;
        case "oracle":
            txtarea.textContent = "Fenix Oracle para analistas";
            break;
        default:
            txtarea.textContent = "Predeterminado";
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

    // Oculta el mensaje después de 2 segundos
    setTimeout(() => {
		mensaje.style.display = "none";
	}, 2000);
}