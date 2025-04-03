// const isEven = a => {
//     if (a % 2 == 0) {
//         return true
//     }
//     return false
// }

// function comput(fdfdewq , x) {
//     let sol = fdfdewq(8)
//     let sol1 = x(567)
//     console.log(sol);
    
// }

// comput(isEven)
// comput(isEven)


// const sumlist  = Arr => {
//     let sum = 0
//     for (let i = 0; i < Arr.length; i++) {
//         sum += Arr[i]
//     }
//     return sum
// }


function handleList(numbers, callback){
    callback(numbers);
}

const avgList = numbers => {
    let sum = 0; 
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    console.log(sum / numbers.length);
}

handleList([1, 5, 6], avgList);





