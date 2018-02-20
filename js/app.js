//1 ) Crea tu propia función forEach que funcione igual a Array.forEach.

// function miForEach(arreglo, callback){
// 		for(i=0;i<arreglo.length;i++){//Recorre el arreglo
//       arreglo[i]=arreglo[i];//Guarda el arreglo en el mismo arreglo
//     }
//     console.log(arreglo);
// 	}
// 	miForEach([1,2,3], function(){});
// Se genera la función
function miForEach(arreglo, callback){
  callback(arreglo);
}
// Se manda a llamar
miForEach([1, 2, 3], function(arreglo){
  for(i=0;i<arreglo.length;i++){//Recorre el arreglo
    arreglo[i]=arreglo[i];//Guarda el arreglo en el mismo arreglo
  }
  console.log(arreglo);
});

// 2 ) Crea tu propia función map que funcione igual a Array.map.
// function miMap(arreglo, callback){
//   var newArray=[];//Arreglo nuevo donde se guardará la información
//   for(i=0;i<arreglo.length;i++){//Recorre el arreglo
//     newArray.push(arreglo[i]);//Por medio del push va agregando los elementos al arreglo
//   }
//   console.log(newArray);//Imprime el arreglo
// }
// 	miMap([1,2,3], function(){});

  // Se genera la función
function miMap(arreglo, callback){
  callback(arreglo);
}
// Se manda a llamar
miMap([1, 2, 3], function(arreglo){
  var newArray=[];//Arreglo nuevo donde se guardará la información
  for(i=0;i<arreglo.length;i++){//Recorre el arreglo
    newArray.push(arreglo[i]);//Por medio del push va agregando los elementos al arreglo
  }
  console.log(newArray);//Imprime el arreglo
});

//3 ) Crea tu propia función filter que funcione igual a Array.filter.
// function miFilter(arreglo, filter){
//   var newArray=[];//Arreglo nuevo donde se guardará la información
//   for(i=0;i<arreglo.length;i++){//Recorre el arreglo
//     if (arreglo[i]>=2){//El filtro me muestra los valores que son mayores o iguales a 2
//       newArray.push(arreglo[i]);//Agrega cada valor que cumpla con la condición mediante push a un nuevo arreglo
//     }
//   }
//   console.log(newArray);
// }
// miFilter([1,2,3], 2);//Se manda a llamar a la función con el arreglo y despues con el número a filtrar
// Se genera la función
function miFilter(arreglo,filter, callback){
  callback(arreglo,filter);
}
// Se manda a llamar
miFilter([1, 2, 3], 2, function(arreglo,filter){
  var newArray=[];//Arreglo nuevo donde se guardará la información
  for(i=0;i<arreglo.length;i++){//Recorre el arreglo
    if (arreglo[i]>=filter){//El filtro me muestra los valores que son mayores o iguales a 2
      newArray.push(arreglo[i]);//Agrega cada valor que cumpla con la condición mediante push a un nuevo arreglo
    }
  }
  console.log(newArray);
});

//4 ) Crea tu propia función reduce que funcione igual a Array.reduce.

// function miReduce(arreglo, reduce){
//   var finalValue=reduce;//Contiene el resultado final de la función Reduce
//   for(i=0;i<arreglo.length;i++){//Recorre el arreglo
//     finalValue+=(arreglo[i]);
//   }
//   console.log(finalValue);
// }
// miReduce([1,2,3,4], 0);
//
// Se genera la función
function miReduce(arreglo,reduce, callback){
  callback(arreglo,reduce);
}
// Se manda a llamar
miReduce([1, 2, 3], 0, function(arreglo,reduce){//el parametro reduce=0 para que no tenga acumulado nada
  var finalValue=reduce;//Contiene el resultado final de la función Reduce
  for(i=0;i<arreglo.length;i++){//Recorre el arreglo
    finalValue+=(arreglo[i]);
  }
  console.log(finalValue);
});


// //Bonus: 1 ) Crea tu propia función sort que funcione igual a Array.
// function miSort(arreglo, callback){
//
// 	}


function miSort(arreglo, callback){
    callback(arreglo)
}

miSort([2, 3, 1], function(arreglo){
  var arregloLength = arreglo.length;//Para obtener la longitud del arreglo
  for (var i = 0; i <=arregloLength; i++) {//Recorre cada elemento del arreglo
    for(var j = 0; j <=arregloLength; j++){//Recorre por otro camino los elementos del arreglo
      if (arreglo[j] < arreglo[j - 1]) {//Compara el elemento anterior y el actual
        var current = arreglo[j];//Si el elemento actual es menor que el anterior en "current" agrega el menor
        arreglo[j] = arreglo[j - 1];//Al elemento actual le asigna el elemento anterior
        arreglo[j - 1] = current;//Al elemento anterior se asigna el que hast ahora es el valor más pequeño (resultao de la comparación de la linea 10)
      }
    }
  }
  console.log(arreglo);
  return arreglo;
})
