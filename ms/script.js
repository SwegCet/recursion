function mergeSort(array) {
    const low = 0; //the first of the array

    if (array.length <= 1) { //If we can't split the subarrays anymore, we start the sorting & merging
        return array;
    }

    mid = Math.floor(array.length / 2);

    const leftSubArray = array.slice(low, mid); //Splits the main array into left half
    const rightSubArray = array.slice(mid); //Splits main array into right half

    //Return sorted Left-SubArray and Right-SubArray
    return merge(mergeSort(leftSubArray), mergeSort(rightSubArray));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //Compare the values from both subarrays
    while (leftIndex < left.length && rightIndex < right.length) { //Loop while we're in the subarrays
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    //Concat remaining elements from subarrays if we have any
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arrayValue = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(arrayValue));
let secondArray = [105, 79, 100, 110];
console.log(mergeSort(secondArray));