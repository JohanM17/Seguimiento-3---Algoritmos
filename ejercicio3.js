const clasicos = 1
const running = 2
const basketball = 3

const valorClasicos = 500000
const valorRunning = 800000
const valorBasketball = 1000000

let opcionSeleccionada = parseInt(prompt("seleccione el modelo de tennis: \n1. clasicos (500000) \n2. running (800000) \n3. basketball (1000000) "));
    alert("seleccione ")
let talla = parseInt(prompt("seleccione la talla (35 a 44)"));

if(talla < 35 || talla > 44) {
    alert("talla invalida")
}else if(opcionSeleccionada === clasicos){
        let cantidadComprar = parseInt(prompt("seleccione la cantidad a comprar (Min 1 - Max 5)"))
    if(cantidadComprar <1 || cantidadComprar > 5){
        alert("cantidad invalida")
    }else if(cantidadComprar >=3 && cantidadComprar <=5) {
        alert(`sus pares de tenis modelo clasico tendran un costo de: ${cantidadComprar * valorClasicos - ((valorClasicos * cantidadComprar) * 0.10)} al aplicarse un 10% de descuento al llevar mas de 3 pares`)
    }else if(cantidadComprar >=1 || cantidadComprar <3) {
        alert(`sus pares de tenis modelo clasico tendran un costo de: ${cantidadComprar * valorClasicos}`)
    }
}else if(opcionSeleccionada === running){
    let cantidadComprar = parseInt(prompt("seleccione la cantidad a comprar (Min 1 - Max 5)"))
    if(cantidadComprar <1 || cantidadComprar > 5){
        alert("cantidad invalida")
    }else if(cantidadComprar >=3 && cantidadComprar <=5) {
        alert(`sus pares de tenis modelo running tendran un costo de: ${cantidadComprar * valorRunning - ((valorRunning * cantidadComprar) * 0.10)} al aplicarse un 10% de descuento al llevar mas de 3 pares`)
    }else if(cantidadComprar >=1 || cantidadComprar <3) {
        alert(`sus pares de tenis modelo running tendran un costo de: ${cantidadComprar * valorRunning}`)
    }
}else if(opcionSeleccionada === basketball){
    let cantidadComprar = parseInt(prompt("seleccione la cantidad a comprar (Min 1 - Max 5)"))
    if(cantidadComprar <1 || cantidadComprar > 5){
        alert("cantidad invalida")
    }else if(cantidadComprar >=3 && cantidadComprar <=5) {
        alert(`sus pares de tenis modelo basketball tendran un costo de: ${cantidadComprar * valorBasketball - ((valorBasketball * cantidadComprar) * 0.10)} al aplicarse un 10% de descuento al llevar mas de 3 pares`)
    }else if(cantidadComprar >=1 || cantidadComprar <3) {
        alert(`sus pares de tenis modelo basketball tendran un costo de: ${cantidadComprar * valorBasketball}`)
    }
}