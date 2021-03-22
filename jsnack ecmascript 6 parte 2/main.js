// jsnack1()
// jsnack2()
// jsnack3()

function jsnack1() {
  // JSNACK 1
  // Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  // Stampare a schermo la bici con peso minore.
  // Usiamo il forEach

  var bici = [
    mountain = {
      nome: "pippo",
      peso: dice(1,20),
    },

    bikes = {
      nome: "topolino",
      peso: dice(1,20),
    },

    diables = {
      nome: "paperino",
      peso: dice(1,20),
    }
  ]
  console.log(bici);

  // // mio codice che non funziona
  // var bicipiccola = bici.forEach((item, index, array) => {
  //   if (bici.peso < bicipiccola.peso) {
  //       bicipiccola = bici[i]
  //     }
  // });

  // raffa solution
  let min = bici[0].peso
  bici.forEach((item, i) => {
    if (item.peso < min) {
      min = item.peso
    }
  });
  var bicipiccola = bici.filter((item) => item.peso == min)
  console.log(`la bici piu leggera ${bicipiccola[0].nome}`);
}

function jsnack2() {
  // JSNACK 2
  // Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
  // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
  // ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

  var numbersArray = [0,1,2,3,4,5,6,7,8,9,10]
  console.log("numbersArray", numbersArray);
  var a = 5
  console.log("a", a);
  var b = 8
  console.log("b", b);

  function sliceString(arrays, sliceMin, sliceMax) {
    var arraySliced = arrays.slice(sliceMin,sliceMax+1)// +1 perche slice non prende l'ultimo valore
    return arraySliced // questo commento e quello prima sono dalla soluzione
  }

  var result = sliceString(numbersArray,a,b)
  console.log(result);


  // var arraySliced = sliceString(numbersArray, a, b)
  // console.log("arraySliced", arraySliced);

}

function jsnack3() {
  // JSNACK 2
  // Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
  // La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
  // ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)
  // svolgilo con EcmaScript6 (es filter)

  var numbersArray = [0,1,2,3,4,5,6,7,8,9,10]
  console.log("numbersArray", numbersArray);
  var a = 5
  console.log("a", a);
  var b = 8
  console.log("b", b);

  function sliceString(arrays, sliceMin, sliceMax) {
    // var arraySliced = arrays.slice(sliceMin,sliceMax+1)// +1 perche slice non prende l'ultimo valore

  }



  // var arraySliced = sliceString(numbersArray, a, b)
  // console.log("arraySliced", arraySliced);

}




// FUNZIONI
function dice(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
