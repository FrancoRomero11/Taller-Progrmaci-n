let num1= parseInt(prompt("ingrese su primer numero"))
let num2= parseInt(prompt("ingrese su segundo numero"))

if(num1===num2){
    alert("no hay intervalo")
    }else{
        if(num1>num2){
            let aux=num1;
                num1=num2;
                num2=aux;
        }

        for(let i=(num1+1); i<num2; i++){

        if(num1%2===0){
            document.write(i+"<br><hr>")
        }else{
            impares++
        }
        }
    }

/*for(let i=(num1+1); i<num2; i++){
    document.write(i+"<br><hr>")
}
while(num1<num2){
    document.write(num1)
    num1++
}*/

/*if(num1===num2){
    alert("no hay intervalo")
    }else{
        if(num1>num2){
            let aux=num1;
                num1=num2;
                num2=aux;
        }
        while(num1<(num2-1)){
            num1++
            if(num1%2===0)
            document.write(num1+"<br><hr>")
        }
    }*/