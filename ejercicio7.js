const precios = {

    "general": { precio: 50000, capacidad: 100 },
    "preferencial": { precio: 150000, capacidad: 50 },
    "VIP": {precio: 300000, capacidad: 20 }
    
};

function calcularTotal(localidad, cantidad) {
    
    const precioEntrada = precios [localidad].precio;
    const subtotal = cantidad * precioEntrada;
    const impuestos = cantidad  * 0.1 * precioEntrada;
    const cargoServicio = cantidad * 5000;
    return subtotal + impuestos + cargoServicio;

}

function realizarCompra (localidad, cantidad) {
    const localidaInfo = precios[localidad];
    if (cantidad >5) {
        return "Error: Máximo 5 boletas pro transacción";
    } else if (cantidad > localidaInfo.capacidad) {
        return "Error: No hay suficientes boletas disponibles en esta localidad";
    } else { 
        const total = calcularTotal(localidad,cantidad);
        return {
            subtotal: total - cantidad * 5000,
            cargoServicio: cantidad * 5000,
            impuestos: cantidad * 0.1 * precios[localidad].precio,
            total: total
        };
    };
}