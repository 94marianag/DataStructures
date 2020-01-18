//5.- Escribe una función que reciba como parámetro un arreglo de número y un número A.
//La función debe regresar un nuevo arreglo con todos los elementos del arreglo original
//pero eliminando todos los elementos que sean igual al número A.
function borrar(array,A){
    array1=[];
    let j=0;
    for(let i=0; i<=array.length-1; i++){
        if (array[i]!= A){
           array1[j] =array[i];
           j++;            
        }
    }
    console.log(array1);
}
borrar([3,1,2,3,5,9,3],3);
