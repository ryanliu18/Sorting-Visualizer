export function getBubbleSortAnimations(array) {

    const animations = [];

    for (let i = 0; i < array.length-1; i++) {
        for (let j = 0; j < array.length-i-1; j++) {
            animations.push([j,j+1]);
            animations.push([j,j+1]);
            if (array[j] > array[j+1]) {
                animations.push("Swap");
                animations.push([j,array[j+1],j+1,array[j]]);
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return animations;

}

function bubbleSort(array) {
    // iterate over array
    for (let i = 0; i < array.length-1; i++) {
        // iterate over remaining unsorted elements in array
        for (let j = 0; j < array.length-i-1; j++) {
            // compare adjacent elements, swap if out of order
            if (array[j] > array[j+1]) {
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}