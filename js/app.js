// JS Para la comprobación de datos del formulario de entrada

// Capturar el valor del input nick
const inputNick = document.getElementById('nick');
console.log(inputNick.nodeType)
inputNick.value = "Paco";
console.log(inputNick.value)

// Capturar el valor del select

const inputTamano = document.getElementById('tamano');
console.log(inputTamano.value)
console.log(inputTamano.options[inputTamano.selectedIndex].text);
