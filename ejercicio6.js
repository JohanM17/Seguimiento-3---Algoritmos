const precios = {
    
    "hamburguesas": { "hamburguesa simple": 25000, "hamburguesa doble": 35000, "papas fritas": 8000 },
    "pizzeria": { "pizza personal": 15000, "pizza mediana": 35000, "pizza familiar": 55000},
    "comida china": { "fideos con pollo": 18000, "arroz tres delicias": 20000, "pollo agridulce": 25000 }
};

function calcularSubtotal(restaurant, items) {
    return items.reduce ((subtotal. item) = subtotal + (precios[restaurant][item.nombre] * item.cantidad), 0 ); 
}

function realizarPedido (restaurant, items) {
    const subtotal = calcularSubtotal (restaurant.items);
    return { subtotal, costoEnvio: 5000, total: subtotal + 5000 };
}
