//4.- Escribe una función que reciba como parámetro un arreglo de números y un número A.
//Debe regresar el primer indice del arreglo donde se encuentre el número A. Sino se encuetra el
//número A en el arreglo debe regresar -1;
function index(array,A){
    for(let i=0; i<=array.length-1; i++){
        if (array[i]== A){
            console.log("index: ",i);
            break;
        }
        if(i==array.length-1)
        console.log(-1);        
    }
}
index([1,2,3],5);