//Promedio
//Escribe una función que acepte como parámetro un arreglo de enteros 
//y regrese el promedio de los números.
function promedio(numbers){
    let sum = 0;
        for (let i = 0; i<numbers.length; i++){
            sum = sum + numbers[i];            
        }
        
        return  (sum/(numbers.length));
}
console.log(promedio([10,20]));
