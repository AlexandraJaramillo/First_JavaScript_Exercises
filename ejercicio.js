console.log ('__________________PUNTO 1____________________________________________________')
//1 Crear función que reciba como parámetros dos números y que devuelva la suma de ellos.
function PuntoUno (a,b) {
return a + b;
}
console.log (PuntoUno(29,1));


console.log ('__________________PUNTO 2____________________________________________________')
//2 Crear función que determine si un número es par o impar.
const numero = 2
const par = (num) => num % 2 === 0;
const impar = (num) => num % 2 === 1;

console.log(
    `El ${numero} ES PAR: ${par(numero)}`
);

console.log(
    `El ${numero} ES IMPAR: ${impar(numero)}`
);




console.log ('__________________PUNTO 3____________________________________________________')
//3 Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado. 
let car = {
    make:"Jeep",
    version: "Wrangler",
    model: "2018",
    numberDoors: 4,
    motor: 2143,
    generation: "JL",
    price: 45000,
    colors: ["red", "black", "white"],
    aseat: {
        color: "black",
        material: "leather",
        capacity: "One person",
        security: "contoun",

    }
};

console.log(car)


console.log ('__________________PUNTO 4____________________________________________________')
//4 Crear una función que devuelva la marca del carro.
function getMake (car){
    let make = car.make;
    console.log  (make)

};

getMake(car)


console.log ('__________________PUNTO 5____________________________________________________')
//5 Crear una función que devuelva la cantidad de puertas que tiene el carro

function getNumberDoors (car) {
    let numberDoors = car.numberDoors;
    console.log (numberDoors)
}

getNumberDoors(car)



console.log ('__________________PUNTO 6____________________________________________________')
//6 Crear una función que devuelva un atributo del objeto anidado.  ?? No se puede extraer del objeto anidado directamente??

function getColorAseat (car){
    let colorAseat = car.aseat.color;
    console.log (colorAseat)
}

getColorAseat(car)


console.log ('__________________PUNTO 7____________________________________________________')
//7 Crear un array de 10 números.
let tablaTres = [3,6,9,12,15,18,21,24,27,30]



console.log ('__________________PUNTO 8____________________________________________________')
//8 Crear una función que imprima en consola todos los números de un array (Investigar ciclo for) ?? no entiendo el orden

function PrintNumbers(number) {
    for (let i = 0; i < number.length; i++){console.log(number[i]); 
} 
}

PrintNumbers(tablaTres)



console.log ('__________________PUNTO 9____________________________________________________')
//9 Crear una función que elimine los números pares de ese array.

function deleteEven(array) { console.log(array.filter(number => number % 2 !== 0)) }; 

deleteEven(tablaTres)



console.log ('__________________PUNTO 10____________________________________________________')
//10 Crear una función que devuelva el número mayor de un array.



console.log ('__________________PUNTO 11____________________________________________________')
//11 Crear una función que devuelva el número menos de un array.


console.log ('__________________PUNTO 12____________________________________________________')
//12 Crear un función que convierta en minúsculas todas las letras de un texto.


console.log ('__________________PUNTO 13____________________________________________________')
//13 Crear una función que convierta en mayúsculas todas las letras de un texto.



console.log ('__________________PUNTO 14____________________________________________________')
//14 Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.
let names = ["david", "manuela", "alexandra", "monica", "jean", "lucia"] 
function arrayMayus(array) { 
    for (let i=0; i<array.length; i++) { 
        let mayus = array[i].charAt(0).toUpperCase() + array[i].slice(1) 
        array.splice(i, 1, mayus) 
    } 
} 

function mayusPalabra(text) { 
    let result = text.toLowerCase().split(' '); 
    for (let i = 0; i < result.length; i++) {
         result[i] = result[i].charAt(0).toUpperCase() + result[i].substring(1); 
        } 
        
        console.log(result.join(' ')); } 



console.log ('__________________PUNTO 15____________________________________________________')       
//15 Crear un array de 10 nombres.


console.log ('__________________PUNTO 16____________________________________________________')
//16 Crear una función que imprima en pantalla una lista con los nombres del array de nombres.


console.log ('__________________PUNTO 17____________________________________________________')
//17 Crear un array de números.


console.log ('__________________PUNTO 18____________________________________________________')
//18 Crear una función que pinte en pantalla cuántos números tiene el array de números.


console.log ('__________________PUNTO 19____________________________________________________')
//19 Crea los nodos necesarios para imprimir un formulario.


console.log ('__________________PUNTO 20____________________________________________________')
//20 Crea los nodos necesarios para imprimir una tabla. 


console.log ('__________________PUNTO 21____________________________________________________')
//21 Crea el siguiente objeto: 

let array = [
   {
   "id": 1,
   "name": "Rick Sanchez",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 2,
   "name": "Morty Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
    "id": 3,
   "name": "Summer Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Female",
   },
   {
   "id": 4,
   "name": "Beth Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Female",
   },
   {
   "id": 5,
   "name": "Jerry Smith",
   "status": "Alive",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 6,
   "name": "Abadango Cluster Princess",
   "status": "Alive",
   "species": "Alien",
   "type": "",
   "gender": "Female",
   },
   {
   "id": 7,
   "name": "Abradolf Lincler",
   "status": "unknown",
   "species": "Human",
   "type": "Genetic experiment",
   "gender": "Male",
   },
   {
   "id": 8,
   "name": "Adjudicator Rick",
   "status": "Dead",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 9,
   "name": "Agency Director",
   "status": "Dead",
   "species": "Human",
   "type": "",
   "gender": "Male",
   },
   {
   "id": 10,
   "name": "Alan Rails",
   "status": "Dead",
   "species": "Human",
   "type": "Superhuman (Ghost trains summoner)",
   "gender": "Male",
   }
   ]


console.log ('__________________PUNTO 14____________________________________________________')
//22 Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.
