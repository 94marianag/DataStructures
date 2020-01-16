//Repetido
//Escribe una función que acepte como parámetro un arreglo de enteros 
//y regrese el primer entero repetido, sino existe -1.
function repet(array){
    for (i=0; i<=array.length-1;i++){
        let c=array[i];
        for(j=i+1; j<=array.length-1;j++){
        if (c==array[j])
        {
            console.log(c);
            j=array.length;
            i=array.length;
        }
        
        }
        if (i==array.length-1)
        console.log(-1);
    }

}
repet([1,0,9,2,8]);