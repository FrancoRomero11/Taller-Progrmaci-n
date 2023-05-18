array1 = []
array2 = []
array3 = []
/* declaras el arreglo */
let num1;
let num2;
let suma;
/* declaras las variables en este caso numeros */
function Cargar(){
    num1 =parseInt( document.getElementById("arreglo1").value)
    num2 =parseInt( document.getElementById("arreglo2").value)
/* este toma un dato de html por medio del id y lo pasa a javascript */
    array1.push(num1)
    array2.push(num2)
/* es un metodo al cual le colocas el valor de num1 */    
    console.log(array1)
    console.log(array2)
    /* muestra los valores en la consola */
} 
function Suma() {
    for (let i=0; i<=array1.lenght;i++){
        suma[i] = array1 [i] + array2 [i]
    }
    console.log(array3)
}
function Mostrar(){
    document.write("arreglo1: "+array1+"<br>");
    document.write("arreglo2: "+array2 + "<br>");
    document.write("la suma de los arreglos es:"+array3+"<br>");
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