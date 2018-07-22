function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
    return false;
}

function isEvenShorter(num) {
    return num % 2 === 0;
}

function factorial(num) {
    var result = 1; 
    
    for(var i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function kebabToSnake(kebabString) {
    var snakeCased = kebabString.replace(/-/g, "_");
    return snakeCased;
}
    
