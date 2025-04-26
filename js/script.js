const options = document.getElementById("options");
const comment = document.getElementById("comment");
const copy = document.getElementById("copy");

// Función copiar area de texto
copy.addEventListener("click", () => {
  navigator.clipboard
    .writeText(comment.value)
    .then(() => {
      // Cambiar el texto del botón temporalmente
      const originalText = copy.textContent;
      copy.textContent = "¡Copiado✔️!";

      // Restaurar el texto después de 2 segundos
      setTimeout(() => {
        copy.textContent = originalText;
      }, 2000);
    })
    .catch((err) => {
      console.error("Error al copiar el texto:", err);
    });
});

// Funcion switch
options.addEventListener("change", () => {
  switch (options.value) {
    case "general":
      comment.textContent = `Buenxs xxx, xxx.

De acuerdo a la información del caso, se detalla lo siguiente:

- 
- 
- 

Quedamos atentos a cualquier novedad.

Saludos.`;
      break;
    case "entrega":
      comment.textContent =
        "Texto predeterminado de entrega de equipo por nuevo ingreso";
      break;
    case "mantenimiento":
      comment.textContent = "Texto predeterminado de mantenimiento de equipo";
      break;
    default:
      comment.textContent = "";
  }
});
