console.log("¡Bienvenido a la fabrica de escobas!");

const modelos = ["Escoba dura", "Escoba suave", "Cepillo"];

const materiales = ["Cerdas sintéticas", "Cerdas naturales"];

const preciosBase = {
  "Escoba dura": {
    "Cerdas sintéticas": 8000,
    "Cerdas naturales": 10000,
  },
  "Escoba suave": {
    "Cerdas sintéticas": 8000,
    "Cerdas naturales": 10000,
  },
  Cepillo: {
    "Cerdas sintéticas": 12000,
    "Cerdas naturales": 15000,
  },
};

const precioMangoLargo = 2000;
const precioGanchoPunta = 500;

const cantidadEscobas = parseInt(prompt("Ingrese la cantidad de escobas que desea comprar:"));

if (isNaN(cantidadEscobas) || cantidadEscobas < 3 || cantidadEscobas > 30) {
  console.log("Cantidad inválida. Debe ser entre 3 y 30 escobas.");
} else {
 
  console.log("Modelos disponibles:");
  modelos.forEach((modelo, index) => {
    console.log(`${index + 1}. ${modelo}`);
  });
  const modeloSeleccionado = parseInt(prompt("Seleccione el número del modelo deseado:"));
  if (isNaN(modeloSeleccionado) || modeloSeleccionado < 1 || modeloSeleccionado > modelos.length) {
    console.log("Selección inválida. Intente nuevamente.");
  } else {
    const modeloElegido = modelos[modeloSeleccionado - 1];

   
    console.log("Tipos de material disponibles:");
    materiales.forEach((material, index) => {
      console.log(`${index + 1}. ${material}`);
    });
    const materialSeleccionado = parseInt(prompt("Seleccione el número del tipo de material deseado:"));
    if (isNaN(materialSeleccionado) || materialSeleccionado < 1 || materialSeleccionado > materiales.length) {
      console.log("Selección inválida. Intente nuevamente.");
    } else {
      const materialElegido = materiales[materialSeleccionado - 1];

      const precioBase = preciosBase[modeloElegido][materialElegido];
      let precioTotal = precioBase;

      const deseaMangoLargo = prompt("¿Desea agregar mango largo? (Sí/No):").toLowerCase();
      if (deseaMangoLargo === "sí") {
        precioTotal += precioMangoLargo;
      }

      const deseaGanchoPunta = prompt("¿Desea agregar gancho en la punta? (Sí/No):").toLowerCase();
      if (deseaGanchoPunta === "sí") {
        precioTotal += precioGanchoPunta;
      }

      console.log(`Cotización para ${cantidadEscobas} escobas:`);
      console.log(`Modelo: ${modeloElegido}`);
      console.log(`Material: ${materialElegido}`);
      console.log(`Precio base: $${precioBase}`);
      console.log(`Precio total: $${precioTotal}`);
    }
  }
}
