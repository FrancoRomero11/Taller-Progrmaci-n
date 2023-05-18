let a = [];
let b = [];
let c = [];
let aux = [];
function Cargar(a, b) { // carga datos en los arreglos
    valor1 = parseInt(document.getElementById('uno').value) // toma del input el valor que va al arreglo A
    valor2 = parseInt(document.getElementById('dos').value) // toma del input el valor que va al arreglo B
    if (!valor1 || !valor2) { // si el primer o segundo input esta vacio tira alert
        alert("ingrese valores en el input")
    } else { //si ningun input esta vacio los carga en el arreglo
        document.getElementById('uno').value = '' // blanquea el 1er input
        document.getElementById('dos').value = '' // blanquea el 2do input
        a.push(valor1) // agrega al arreglo el primer valor captado en el input
        b.push(valor2) // agrega al arreglo el segundo valor captado en el input
        document.getElementById('aa').textContent = 'arreglo A: ' + a;
        document.getElementById('ab').textContent = 'arreglo B: ' + b;
        document.getElementById('botondesuma').disabled=false
        document.getElementById('botondeintercambio').disabled=false
    }
}
function Sumar(a, b, c) {
    for (i = 0; i < a.length; i++) {
        c[i] = (a[i] + b[i]);
    }
    document.getElementById('resultado_a').textContent = 'Arreglo A: ' + a;
    document.getElementById('resultado_b').textContent = 'Arreglo B: ' + b;
    document.getElementById('resultado_c').textContent = 'Arreglo C: ' + c;
    //cons botondesuma= document.getElementby('botondesuma');
    //botondesuma.disabled=true
    document.getElementById('botondesuma').disabled=false
}
function Intercambiar (a, b, aux) {
    aux = a;
    a = b;
    b = aux;
    document.getElementById('intercambio_a'), textContent='arreglo a: ' +a;
    document.getElementById('intercambio_b'), textContent='arreglo b: ' +b;
    document.getElementById('botonintercambio').disabled=true 

}
function BuscarA(a) {
    Buscar=parseInt(document.getElementById('buscarenA').value)
    let contA=0
    for (let i = 0; i < a.length; i++) {
        if (a[i]===buscar) {
            contA++
        }
    }
    document.getElementById('buscarenA').value=''
    document.getElementById('buscar_a').textContent = 'el valor: '+buscar+ 'aparece' + contA + 'veces';
}
function BuscarB(b) {
    buscar=parseInt(document.getElementById('buscarenB').value)
    let contB=0
    for (i = 0; i < b.length; i++) {
        if (b[i]===buscar) {
            contB++
        }
    }
    document.getElementById('buscarenB').value=''
    document.getElementById('buscar_b').textContent = 'el valor: '+ buscar + 'aparece' + contB + 'veces'; 
}
function BuscarC(c) {
    buscar=parseInt(document.getElementById('buscarenC').value)
    let contC=0
    for (i = 0; i < c.length; i++) {
        if (c[i]===buscar) {
            contC++
        }
    }
    document.getElementById('buscarenC').value=''
    document.getElementById('buscar_c').textContent= 'el valor: ' + buscar + 'aparece' + contC + 'veces';
}