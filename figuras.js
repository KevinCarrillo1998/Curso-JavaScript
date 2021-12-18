// Código del cuadrado
console.group('Cuadrados')
// const ladoCuadrado = 5
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm')
// const perimetroCuadrado = ladoCuadrado * 4
// console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + ' cm')
// const areaCuadrado = ladoCuadrado * ladoCuadrado
// console.log('El área del cuadrado es: ' + areaCuadrado + ' cm^2')

function perimetroCuadrado (lado) {
    return lado * 4
}

function areaCuadrado(lado) {
    return lado * lado
}

console.groupEnd()

// Código del triángulo
console.group('Triángulo')
// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4
// console.log(
//     'Los lados del triángulo miden: ' 
//     + ladoTriangulo1 
//     + ' cm, ' 
//     + ladoTriangulo2 
//     + ' cm, '  
//     + baseTriangulo 
//     + ' cm'
// )
// const alturaTriangulo = 5.5
// console.log('La altura del triángulo es de miden: ' + alturaTriangulo + ' cm')
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// console.log('El perímetro del triángulo: ' + perimetroTriangulo + ' cm')
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
// console.log('El área del triángulo: ' + areaTriangulo + ' cm^2')

function perimetroTriangulo (lado1, lado2, base) {
    return parseInt (lado1) + parseInt (lado2) + parseInt (base)
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

console.groupEnd()

// Código del círiculo
console.group('Círculo')
// Radio
// const radioCirculo = 4;
// console.log('El radio del círculo es: ' + radioCirculo + ' cm')
// Diámetro
// const diametroCirculo = radioCirculo * 2
// console.log('El diámetro del círculo es: ' + diametroCirculo + ' cm')
// PI
const PI = Math.PI;
console.log('PI es: ' + PI)
// Circunferencia
// const perimetroCirculo = diametroCirculo * PI
// console.log('El perímetro del círculo es: ' + perimetroCirculo + ' cm')
// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI
// console.log('El área del círculo es: ' + areaCirculo + ' cm^2')

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
  
console.groupEnd()


// Aquí interactuamos con el HTML
// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert('Muestra el perímetro es: ' + perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    alert('Muestra el área es: ' + area)
}

// Triangulo
function CalcularPerimetroTriangulo() {
    const input1 = document.getElementById('InputTriangulo1')
    const value1 = input1.value
    const input2 = document.getElementById('InputTriangulo2')
    const value2 = input2.value
    const input3 = document.getElementById('InputTriangulo3')
    const value3 = input3.value
    const perimetro = perimetroTriangulo(value1, value2, value3)
    alert('Muestra el perímetro es: ' + perimetro)
}

function CalcularAreaTriangulo() {
    const input3 = document.getElementById('InputTriangulo3')
    const value3 = input3.value
    const input4 = document.getElementById('InputTriangulo4')
    const value4 =  input4.value
    const area = areaTriangulo(value3, value4)
    alert('Muestra el área es: ' + area)
}

// Circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById('InputCirculo')
    const value = input.value
    const perimetro = perimetroCirculo(value)
    alert('Muestra el perímetro es: ' + perimetro)
}

function calcularAreaCirculo() {
    const input = document.getElementById('InputCirculo')
    const value = input.value
    const area = areaCirculo(value)
    alert('Muestra el área es: ' + area)
}