//10.- Escribe una función que reciba como parámetro un arreglo de números y regrese un
//nuevo arreglo con todos los elementos del arreglo original excepto el primero y el ultimo.
function cut(array){
    let array1 = array.slice(1,array.length-1);
    console.log(array1);
}
cut([29,50,9,19,124,99,8,3,2]);