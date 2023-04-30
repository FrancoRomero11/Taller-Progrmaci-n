// buscar el maximo y minimo de 10 numeros insertados por el usuario

let nota;
let max; 
let min;  
let suma=0
let maxmateria;
let minmateria;
let start=true
let materia;
let cantidad=parseInt(prompt("¿cuantas notas va a ingresarr?"))  
for(let i=0; i<cantidad; i++){
        materia=prompt("ingrese nombre de la materia")
        nota=parseInt(prompt("ingrese una nota"))
        while (nota<1 ) {
            
        }
        suma+=nota //suma=suma+num
        if(start){
            max=nota
            min=nota
            maxmateria=materia
            minmateria=materia
            start=false
        }else{
        if (nota>max) {
            max=nota
            maxmateria=materia
            } else { 
                if(nota<min){
                min=nota
                minmateria=materia
            }
    
        }
    }
}
promedio=(suma/cantidad)
document.write("la nota mas alta fue en "+maxmateria+" y fue de "+max+"<br>")
document.write("la nota mas baja fue en "+minmateria+" y fue de "+min+"<br>")
document.write("el promedio de notas es de "+(promedio)+"<br>")



//let num=parseInt(prompt("ingrese un numero"))
//let max=num 
//let min=num    
//for(let i=0; i<9; i++){
//    num=parseInt(prompt("ingrese un numero"))
//    if (num>max) {
//        max=num
//        } else { if (num<min) {
//            min=num
//        }
//    
//    }
//}
//document.write("el numero mas grande es "+max+"<br>")
//document.write("el numero mas grande es "+min+"<br>")