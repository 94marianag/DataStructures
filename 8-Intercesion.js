//Intercesión
//Escribe una función que acepte como parámetro dos arreglos de enteros y 
//regrese los elementos que tienen en común.

function intercesion (array1, array2){

    for(let i=0; i<=array1.length-1;i++ ){
        for(let j=0 ; j<=array2.length-1; j++){
            if (array1[i] == array2[j])
                console.log(array2[j]);
        }

    }
}
intercesion([1,2,3],[,2,5,3]);