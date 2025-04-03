const isEven = a => {
    if (a % 2 == 0) {
        return true
    }
    return false
}

function comput(callback) {
    let sol = callback(8)
    console.log(sol);
    
}

comput(isEven)




