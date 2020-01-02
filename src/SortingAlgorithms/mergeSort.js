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