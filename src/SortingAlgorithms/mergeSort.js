export function getMergeSortAnimations(array) {

    if (array.length <= 1) return array;
    const auxArray = array.slice();
    const animations = [];

   mergeSortHelper(array,0,array.length-1,auxArray,animations);
   return animations;


}

function mergeSortHelper(mainArray,startIdx,endIdx,auxArray,animations) {
    if (startIdx === endIdx) return;
    const midIdx = Math.floor((startIdx + endIdx)/2);
    mergeSortHelper(auxArray,startIdx,midIdx,mainArray,animations); //why is order aux then main?
    mergeSortHelper(auxArray,midIdx+1,endIdx,mainArray,animations);
    merge(mainArray,startIdx,midIdx,endIdx,auxArray,animations);
}




function merge(mainArray,startIdx,midIdx,endIdx,auxArray,animations) {
    var k = startIdx;  //index for mainArray
    var i = startIdx;  //index for first half of auxArray
    var j = midIdx+1;  //index for second half of auxArray

    while (i <= midIdx && j <= endIdx) {
        animations.push([i,j]);
        animations.push([i,j]);
        if (auxArray[i] > auxArray[j]) {
            animations.push([k,auxArray[j]]);
            mainArray[k] = auxArray[j];
            k++; j++;
        } else {
            animations.push([k,auxArray[i]]);
            mainArray[k] = auxArray[i];
            k++;i++;
        }
    }

    while (i<= midIdx) {
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k,auxArray[i]]);
        mainArray[k] = auxArray[i];
        k++;i++;
    }

    while (j<= endIdx) {
        animations.push([j,j]);
        animations.push([j,j]);
        animations.push([k,auxArray[j]]);
        mainArray[k] = auxArray[j];
        k++;j++;
    }
} 
/*
mergeSort


function mergeSort(array,startIdx,endIdx) {
    // base case of recursion, return the single element array
    if (startIdx === endIdx) return array;

    // calculate index of middle element
    const midIdx = Math.floor((startIdx + endIdx)/2);
    // recursive call to sort first half of array
    const firstHalfSorted = mergeSort(array,startIdx,midIdx);
    // recursive call to sort second half of array
    const secondHalfSorted = mergeSort(array,midIdx+1,endIdx);
    // merge the two sorted halves to a final sorted array, and return
    return merge(firstHalfSorted,secondHalfSorted);
}


// given two individually sorted arrays, combine into a single sorted array
function merge(firstArray,secondArray) {
    let mergedArray = [];
    // enter while loop when either of the two arrays have elements remaining
    // exit while loop when at least one array is empty (arrays may not be same size)
    while (firstArray.length !== 0 && secondArray.length !== 0) {
        // compare first element of each array
        if (firstArray[0] > secondArray[0]) {
            // since both arrays are sorted, secondArray[0] is the smallest element
            // so we know this should go at the front of the merged array
            mergedArray.push(secondArray[0]);
            // remove secondArray[0] from front of array, and loop back
            secondArray.shift();
        } else {
            // since both arrays are sorted, firstArray[0] is the smallest element
            // so we know this should go at the front of the merged array
            mergedArray.push(firstArray[0]);
            // remove firstArray[0] from front of array, and loop back
            firstArray.shift();
        }
    }
    // if firstArray and secondArray were different sizes, we just push the remaining
    // elements into the back of the mergedArray. This works since both are sorted, so
    // WLOG if firstArray still has elements, all of these will be greater than the elements
    // in mergedArray. Thus, we can push into mergedArray, and mergedArray will be sorted 
    while (firstArray.length !== 0) {
        mergedArray.push(firstArray[0]);
        firstArray.shift();
    }
    while (secondArray.length !== 0) {
        mergedArray.push(secondArray[0]);
        secondArray.shift();
    }
    // mergedArray contains all elements of firstArray and secondArray, and is sorted.
    return mergedArray;
}

*/