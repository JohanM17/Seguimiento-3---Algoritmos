const valorMatricula = 7000000;
const porcentaje = 0.05;
const completo = (valorMatricula * porcentaje);
const descuento = (valorMatricula - completo);

let dosCuotas = (valorMatricula / 2);
let interes1 = valorMatricula * 0.02;
let cuota1 = (dosCuotas + interes1);

let tresCuotas = (valorMatricula / 3);
let interes2 = valorMatricula * 0.02;
let cuota2 = (tresCuotas + interes2);


let opcionDePago = parseInt(prompt("seleccione la forma de pago: \n1. Pago completo (5% de descuento) \n2. Pago en 2 cuotas. \n3 pago en 3 cuotas"));

switch (opcionDePago) {
    case(1):
        console.log ("Ha seleccionado el pago completo");
        console.log (`Su pago con descuento del 5% es: ${descuento}`);
        break;

    case(2):
        console.log ("Ha seleccionado el pago en 2 cuotas");
        console.log (`Su pago en 2 cuotas mas el interes del 2% en cada cuota es: ${cuota1}`);
        break;

    case(3):
        console.log ("Ha seleccionado el pago en 3 cuotas");
        console.log (`Su pago en 3 cuotas mas el interes del 2% en cada cuota es: ${cuota2}`);
        break;

    default:
        console.log ("Error, porfavor seleccione uno de los 3 metodos de pago")
        break;
}