export function getQuickSortAnimations(array) {
    const animations = [];
    quickSort(animations,array,0,array.length-1);
    return animations;
    
}


function quickSort(animations,array,lowIdx,highIdx) {

    if (lowIdx < highIdx) {
        const partitionIdx = partition(animations,array,lowIdx,highIdx);
        quickSort(animations,array,lowIdx,partitionIdx-1);
        quickSort(animations,array,partitionIdx+1,highIdx);
    }
}

function partition(animations,array,lowIdx,highIdx) {
    //picks last element as pivot
    const pivot = array[highIdx];
    let i = lowIdx - 1;
    for (let j = lowIdx; j <= highIdx-1; j++) {

        animations.push([j,highIdx]);
        animations.push([j,highIdx]);
        
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
    //swap array[i+1] and array[highIdx]
    var temp = array[i+1];
    animations.push("Swap");
    animations.push([i+1,array[highIdx],highIdx,array[i+1]]);
    array[i+1] = array[highIdx];
    array[highIdx] = temp;
    
    return i+1;

}