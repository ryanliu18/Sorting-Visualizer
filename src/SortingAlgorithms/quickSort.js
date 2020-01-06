export function getQuickSortAnimations(array) {
    const animations = [];
    quickSort(animations,array,0,array.length-1);
    return animations;
    
}


function quickSort(animations,array,startIdx,endIdx) {

    if (startIdx < endIdx) {
        const partitionIdx = partition(animations,array,startIdx,endIdx);
        quickSort(animations,array,startIdx,partitionIdx-1);
        quickSort(animations,array,partitionIdx+1,endIdx);
    }
}

function partition(animations,array,startIdx,endIdx) {
    //picks last element as pivot
    const pivot = array[endIdx];
    let i = startIdx - 1;
    for (let j = startIdx; j <= endIdx-1; j++) {

        animations.push([j,endIdx]);
        animations.push([j,endIdx]);
        
        if (array[j] < pivot) {
            i++;
            animations.push("Swap");
            animations.push([i,array[j],j,array[i]]);
            //swap array[i] and array[j]
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    //swap array[i+1] and array[endIdx]
    var temp = array[i+1];
    animations.push("Swap");
    animations.push([i+1,array[endIdx],endIdx,array[i+1]]);
    array[i+1] = array[endIdx];
    array[endIdx] = temp;
    
    return i+1;

}

/*

function quickSort(array,startIdx,endIdx) {
    // if startIdx >= endIdx, do nothing
    if (startIdx < endIdx) {
        // partition the array, and get the partition index
        const partitionIdx = partition(array,startIdx,endIdx);
        // quickSort the sub array to the left of partition
        quickSort(array,startIdx,partitionIdx-1);
        // quickSort the sub array to the right of partition
        quickSort(array,partitionIdx+1,endIdx);
    }
}


function partition(array,startIdx,endIdx) {
    // picks last element as the partition value (pivot)
    const pivot = array[endIdx];
    // i is index of elements smaller than pivot
    let i = startIdx - 1;
    // iterate over array from start index to end index - 1
    for (let j = startIdx; j <= endIdx-1; j++) {
        // compares and puts all elements less than pivot, to the left of pivot
        if (array[j] < pivot) {
            // move over index of element smaller than pivot 
            i++;
            // swap array[i] and array[j]
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    // now, by default, all values greater than pivot are to the right of index i+1

    // swap array[i+1] (where pivot belongs) and array[endIdx] (pivot)
    // notice: array[i+1] > pivot. Why?
    var temp = array[i+1];
    array[i+1] = array[endIdx];
    array[endIdx] = temp;
    // i+1 is index where partition was inserted
    return i+1;

}

*/