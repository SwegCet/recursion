//Iteration
function fibs(n) {
    let fibArray = [];
    let previousNumber = 0;
    let nextNumber = 1;
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            fibArray[0] = previousNumber;
        }
        else if (i == 1) {
            fibArray[1] = nextNumber;
        }
        else {
            let temp = previousNumber + nextNumber;
            fibArray[i] = temp;
            previousNumber = nextNumber;
            nextNumber = temp;
        }
    }
    return fibArray;
}

console.log(fibs(10));

//Recursion
function fibsRec(n, fibArray = []) {
    if (n == 0) {
        fibArray[0] = 0;
        return fibArray;
    }
    else if (n == 1) {
        fibArray[0] = 0;
        fibArray[1] = 1;
        return fibArray;
    }
    else {
        fibsRec(n - 1, fibArray);
        fibArray[n] = fibArray[n - 1] + fibArray[n - 2];
    }
    return fibArray;
}

console.log(fibsRec(10));