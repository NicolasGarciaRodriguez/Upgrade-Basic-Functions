// 1. Buscar el máximo

// function sum(numberOne , numberTwo) {
//     if (numberOne > numberTwo) {
//         console.log(numberOne)
//     } else {
//         console.log(numberTwo)
//     }
//   }


// 2. Buscar la palabra más larga




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

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average() {
    let reducer = (firstValue, nextValue) => firstValue + nextValue
    let sum = numbers.reduce(reducer);
    let avg = sum /= numbers.length
    console.log(avg)
}

average()