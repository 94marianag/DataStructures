//8.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
//nuevo arreglo con unicamente los números pares.
function pairs(array){
    let array1=[];
    j=0;
    for(i=0; i<=array.length-1;i++){
        if (array[i]%2==0 && array[i]!=0){ //Porque el cero no es par ni impar.
            array1[j]=array[i];
            j++;
        }
    }
    console.log(array1)
}
pairs([0,2,8,4,2,-16,257,1]);
