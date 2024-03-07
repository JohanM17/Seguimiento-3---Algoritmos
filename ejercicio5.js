const tarifas = {
    "bestseller": 500,
    "literatura": 100,
    "academicos": 0
}

const tarifaPorDia = tarifas[categoria]

let costo = tarifaPorDia * dias;

if (dias > 10 && categoria !== "academicos") {
    costo += 0.9;
}

return costo;


function solicitarPretamo (libros) {

if (libros.length > 5) {
    return "Error: Se pueden solicitar máximo 5 libros por prestamo";
}

let costoTotal = 0;

libros.forEach(libros => {
    costoTotal += calcularCostoPrestamo(libro.categoria, libros.dias);
    });

    return costoTotal;
}