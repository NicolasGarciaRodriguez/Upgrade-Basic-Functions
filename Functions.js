// 1. Buscar el máximo

// function sum(numberOne , numberTwo) {
//     if (numberOne > numberTwo) {
//         console.log(numberOne)
//     } else {
//         console.log(numberTwo)
//     }
//   }


// 2. Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
  
  let avengerLargo = param[0];

  for(let i = 0; i < avengers.length; i++){
    // console.log(param[i]);
    if(param[i].length > avengerLargo.length){
        avengerLargo = param[i];
    }
  }
  console.log(avengerLargo);
}

findLongestWord(avengers);


// 3. Calcular la suma

// let numbers = [1, 2, 3, 5, 45, 37, 58];
// let total = 0
// function sumAll(param) {
//     for (let i = 0; i <= numbers.length; i++) {
//         total += numbers[i];
//         console.log(total)
//     }
//   }

//   sumAll()

// 4. Calcular el promedio

// const numbers = [12, 21, 38, 5, 45, 37, 6];

// function average() {
//     let reducer = (firstValue, nextValue) => firstValue + nextValue
//     let sum = numbers.reduce(reducer);
//     let avg = sum /= numbers.length
//     console.log(avg)
// }

// average()


// 5. Calcular promedio de strings

// const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];



// function bucle () {

//     for (element in mixedElements) {
//         if (typeof element === String) {
//             Number(element.length)
//         } else {
//             console.log("error")
//         }
//     }

// }

// console.log(mixedElements)





// 6. Valores Unicos


// const duplicates = [
//     'sushi',
//     'pizza',
//     'burger',
//     'potatoe',
//     'pasta',
//     'ice-cream',
//     'pizza',
//     'chicken',
//     'onion rings',
//     'pasta',
//     'soda'
//   ];


//   function removeDuplicates() {
//       let result = duplicates.filter((item, index) => {
//           return duplicates.indexOf(item) === index;
//       })
//       console.log(result)
//   }

//   removeDuplicates()


// 7. Buscador de nombres

// const nameFinder = [
//     'Peter',
//     'Steve',
//     'Tony',
//     'Natasha',
//     'Clint',
//     'Logan',
//     'Xabier',
//     'Bruce',
//     'Peggy',
//     'Jessica',
//     'Marc'
//   ];
  
//   function finderName(param) {
//     // insert code
//   }
