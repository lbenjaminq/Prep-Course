// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz,
  // donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let newArrays =[];

  for(let i in objeto){
    newArrays.push([i,objeto[i]])
  }
  return newArrays

   /* let keysValues = Object.entries(objeto)
    let newArray=[]
    for(let i = 0; i < keysValues.length; i++){
      newArray.push(keysValues[i])
    }
    return newArray
    */

    // otra forma return Object.entries(objeto);
   
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con e
  //l número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve --->
  // { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
 // b e n j a m i n


  let objetos = {}

  for(let i = 0 ; i < string.length; i++){

    if(objetos.hasOwnProperty(string[i])){
      objetos[string[i]] = objetos[string[i]] + 1

    }else{
      objetos[string[i]] = 1
    }
  }
  return objetos

}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas
  // las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  // s = b e n j a M I N
  
  let mayusculas = ''
  let minusculas = ''

  for(let i=0;i<s.length;i++){
    if(s[i] === s[i].toUpperCase()){
      mayusculas = mayusculas + s[i]
    }else {
      minusculas = minusculas + s[i] // b =  
    }
  }
    return mayusculas + minusculas
 }

  


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se 
  //pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> 
  //"ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

 
  let strArray = str.split(' ').map(function(elemento){
      let cambiado = elemento.split('').reverse().join('')
      return cambiado
  })
      return strArray.join(' ')
  
  
  
  // strArray = [The,Henry,Challengue,is,close]

 /* Recorriendo con for pero no me salio 

let strArray = str.split(' ')
let cambiado = ''

  for(let i = 0 ; i<strArray.length; i++){
    let strInvertido = strArray[i].split('').reverse().join(' ') 
    cambiado = cambiado + strInvertido
  }                                                               
 return cambiado
 
  */
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  // numero = 232

  let convertir = numero.toString()

  if(convertir[0] === convertir[convertir.length-1]){
    return  "Es capicua"
  }
    return "No es capicua"
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  // let cadena = [c,a,d,e,n,a]

  let letrasAEliminar = cadena.replace('a','').replace('b','').replace('c','')
  return letrasAEliminar
}


function sortArray(arr) { 
  // arr = ['soooolo', 'mira', 'cerati','serar',jav'] === [mira,cerati,soooolo,javaaa,seraaaaar]
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let nuevoArreglo = arr.sort(function(a,b){
    return a.length - b.length // si a - b es negativo se ordena primero a
                              // si a - b es positivo se ordena primero b
                              // si a - b es 0 no se hace nada
  })
  return nuevoArreglo
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  // arreglo1 = [ 1, 2, 3, 4, 5]               arreglo2 = [ 1, 5, 34, 15, 12]   ==== [1,5]
  let nuevoArreglos = []
  let arregloVacio = []
  for(let i= 0 ; i < arreglo2.length;i++){
  if(arreglo1.includes(arreglo2[i])){
    nuevoArreglos.push(arreglo2[i])
  }
}
  if(nuevoArreglos.length === 0){
    return arregloVacio
  } else{
    return nuevoArreglos
  }

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

