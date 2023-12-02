/*

*Crea 3 funciones , cada una encargada de detectar si una cadena de 
*texto es un heterograma , un isograma o un pangrama .
*-debes buscar la definicion de cada uno de estos terminos  
*ademas debes evaluar una oracion recibida y separar por palabras la oracion y evaluar si la cantidad de LETRA coincide con la cantidad de palabras de la oracion 

*/ 

function esPangrama(frase) {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alfabeto.length; i++) {
        if (frase.toLowerCase().indexOf(alfabeto[i]) === -1) {
            return false;
        }
    }
    return true;
}

function esIsograma(frase) {
    let letras = {};
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i].toLowerCase();
        if (letras[letra]) {
            return false;
        }
        letras[letra] = true;
    }
    return true;
}

function esHeterograma(frase) {
    let palabras = frase.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        if (!esIsograma(palabras[i])) {
            return false;
        }
    }
    return true;
}

function evaluarOracion(oracion) {
    let palabras = oracion.split(' ');
    let letras = oracion.replace(/ /g, '');
    return palabras.length === letras.length;
}

let frase = prompt("Ingresa tu frase aquí");
console.log('Pangrama:', esPangrama(frase));
console.log('Isograma:', esIsograma(frase));
console.log('Heterograma:', esHeterograma(frase));
console.log('Evaluación de oración:', evaluarOracion(frase));
