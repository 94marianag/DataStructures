//3.- Escribe un función que reciba como parámetro un arreglo de números y un número A. 
//Debe regresar las veces que se encuentra el número A en el arreglo.
function number(array,A){
    let count=0;
    for(let i=0; i<=array.length-1; i++){
        if (array[i]== A){
            count++;
        }
    }
    console.log(count);
}
number([2,1,2,2,5],2);
