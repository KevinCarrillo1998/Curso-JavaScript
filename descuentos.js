// const precioOriginal = 100
// const descuento = 15

// console.log(
//     {
//         precioOriginal,
//         descuento,
//         procentajePrecioConDescuento,
//         precioConDescuento,
//     }
// )

function calcularPrecioConDescuento (precio, descuento) {
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100
    return precioConDescuento
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById('InputPrice')
    const priceValue = inputPrice.value
    const inputDiscount = document.getElementById('InputDiscount')
    const discountValue = inputDiscount.value
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
    const resulto = document.getElementById('Resulto')
    resulto.innerText = 'El precio con descuento son: $' + precioConDescuento
}