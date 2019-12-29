export function mergeSort(array) {

    if (array.length == 1) return array;

    const middleIdx = Math.floor(array.length / 2);

    const firstMergeSort = mergeSort(array.slice(0, middleIdx));
    const secondMergeSort = mergeSort(array.slice(middleIdx));

    return merge(firstMergeSort, secondMergeSort);

}

function merge(array1, array2) {
    var i = 0;  //index for array1
    var j = 0;  //index for array2
    var sortedArray = [];
    while (i < array1.length && j < array2.length) {
        if (array1[i] > array2[j]) {
            sortedArray.push(array2[j]);
            j++;
        } else {
            sortedArray.push(array1[i]);
            i++;
        }
    }

    while(i < array1.length) {
        sortedArray.push(array1[i]);
        i++;
    }

    while (j < array2.length) {
        sortedArray.push(array2[j]);
        j++;
    }

    return sortedArray;

}