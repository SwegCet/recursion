function mergeSort(array) {
    const low = 0; //the first of the array
    const high = array.length - 1; //the last of the array
    if (array.length <= 1) {
        return array;
    }

    mid = Math.floor(array.length / 2);

    const leftSubArray = array.slice(low, mid);
    const rightSubArray = array.slice(mid, high + 1);

    return merge(mergeSort(leftSubArray), mergeSort(rightSubArray));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //Compare the values from both subarrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let arrayValue = [3, 2, 1, 13, 8, 5, 0, 1]
console.log(mergeSort(arrayValue));