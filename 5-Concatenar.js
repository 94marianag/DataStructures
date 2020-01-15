//Concatenar
//Escribe una función que acepte como parámetro un arreglo de cadenas de texto 
//y regrese todos los textos concatenados.


function todojunto (arreglo){
    let juntar = " ";

    for (let i=0; i<=arreglo.length-1; i++){
        juntar = juntar + arreglo[i];
        
    }    
    return juntar;
}
console.log(todojunto(["Hola", "Mundo", "!"]));
