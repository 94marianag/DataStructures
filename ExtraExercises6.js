//6.- Escribe una función que reciba como parámetro un arreglo de números y un número A.
//La función debe regresar un 'boolean' true si el número A está en el arreglo y false si no está
//en el arreglo.
function estaelnumero(array,A){   
    for(let i=0; i<=array.length-1; i++){
        if (array[i]== A){
           console.log(true);      
           break;   
        }
           if(i==array.length-1)
           console.log(false);   
    }    
}
estaelnumero([3,1,2,3,5,9,88],88);
