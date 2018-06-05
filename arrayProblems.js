/*
printReverse()
function to take an array as an argument and print out each element in the array in reverse order
DONT REVERSE THE ARRAY!
*/

function printReverse(arrayToReverse) {
    for(var i = arrayToReverse.length - 1; i >= 0; i--) {
        console.log(arrayToReverse[i]);
    }
}

/*
isUniform()
write a function which takes an array as an argument and returns true if all elements are identical
HINT: create a variable of the first array item in the index and use it to track
*/

function isUniform(arr) {
    var tracker = arr[0];
    for(i = 1; i < arr.length; i++) {
        if(arr[i] !== tracker) {
            return false;
        }
    } return true;
}

/*
sumArray()
function to accept array as argument and return the sum of all numbers
*/

function sumArray(arrSum) {
    var total = 0;
    arrSum.forEach(function(num) {
        total += num;
    });
    return total;
}

/*
max()
return the maximum number in an array passed in as a function
*/
function max(arrMax) {
    var biggest = arrMax[0]
    arrMax.forEach(function(num) {
        if(num > biggest) {
            biggest = num;
        }
    });
    return biggest;
}