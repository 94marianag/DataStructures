//9.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
//nuevo arreglo con unicamente los números impares.
function odd(array){
let array1=[];
    j=0;
    for(i=0; i<=array.length-1;i++){
        if (array[i]%2!=0 && array[i]!=0){ //Porque el cero no es par ni impar.
            array1[j]=array[i];
            j++;
        }
    }
    console.log(array1)
}
odd([0,3,9,15,2,-21,257,12,1]);
