



function factorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

function cubo(numero) {

    return numero * numero * numero;
}

export { factorial, cubo }