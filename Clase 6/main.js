array1 = []
array2 = []
array3 = []
/* declaras el arreglo */

function Cargar(){
    valor1 =parseInt( document.getElementById("arreglo1").value)
    valor2 =parseInt( document.getElementById("arreglo2").value)
/* este toma un dato de html por medio del id y lo pasa a javascript */
    if(!valor1||!valor2){ 
            alert("ingrese valores en el input")
    } else { 
    array1.push(valor1)
    array2.push(valor2)
/* es un metodo al cual le colocas el valor de num1 */    
        document.getElementById("arreglo1").value = ''
        document.getElementById("arreglo2").value = ''
        document.getElementById("mostrar1").textContent = 'Arreglo A: '+ array1
        document.getElementById("mostrar2").textContent = 'Arreglo B: '+ array2
        document.getElementById("suma"). disabled = false
        document.getElementById("intercambio").disabled = false
    }
} 
function Sumar(){
    for (let i=0; i<array1.lenght;i++){
        array3[i] = array1 [i] + array2 [i]
    }
    console.log(array3)
    document.getElementById("mostrarsuma").textContent = 'Suma de A y B: '+ array3
}

function Intercambio(){

}







/* let a = []
let b = []

n=parseInt(prompt("ingrese el numero de  valores"))
for (let i=0; i<n; i++){
    z=prompt ("ingrese valor de a")
    a.push(z) 
    t=prompt("ingrese valor b")
    b.push(t)
} */