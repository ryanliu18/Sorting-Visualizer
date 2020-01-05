export function getInsertionSortAnimations(array) {
    const animations = [];

    for (let i = 1; i < array.length; i++) {
        let currKey = array[i];
        let j = i-1;
        while (j >= 0 && array[j] > currKey) {
            animations.push([i,j]);
            animations.push([i,j]);
            array[j+1] = array[j];
            animations.push([j+1,array[j]]);
            j--;
        }
        animations.push([i,j+1]);
        animations.push([i,j+1]);
        array[j+1] = currKey;
        animations.push([j+1,currKey]);
    }

    return animations;
    
}

function insertionSort(array) {
    // iterate over array
    for (let i = 1; i < array.length; i++) {
        // currKey is the element we are inserting into the previous elements
        let currKey = array[i];
        // initialize j to be index of element before i
        let j = i-1;
        // iterate until index j is out of array or array[j] <= currKey
        while (j >= 0 && array[j] > currKey) {
            //when array[j] > currKey, move over value at index j to index j+1
            array[j+1] = array[j];
            // decrement j
            j--;
        }
        // j+1 is the index where we should insert currKey
        array[j+1] = currKey;
    }
}