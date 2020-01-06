export function getShellSortAnimations(array) {
    const animations = [];

    for (let gap = Math.floor(array.length /2); gap > 0; gap = Math.floor(gap/2)) {
        console.log(gap);

        for (let endIdx = gap; endIdx<array.length; endIdx++) { 
//            let temp = array[endIdx];

            for (let j = endIdx; j>= gap; j -= gap) {
                //compare array[j] and array[j-gap]
                animations.push([j,j-gap]);
                animations.push([j,j-gap]);
                //swap array[j] and array[j-gap];
                if (array[j-gap] > array[j]) {
                    animations.push("Swap");
                    animations.push([j,array[j-gap],j-gap,array[j]]);
                    let temp = array[j];
                    array[j] = array[j-gap];
                    array[j-gap] = temp;
                } else{
                    break;
                }
            }
        }
    }

    return animations;
}

/*

shellSort

function shellSort(array) {
    // initialize gap = floor(n/2)
    // every iteration we divide gap by 2 and take the floor
    // terminate when gap <= 0 (last iteration is when gap === 1)
    for (let gap = Math.floor(array.length /2); gap > 0; gap = Math.floor(gap/2)) {
        // perform a "gapped insertion sort"
        // increment endIdx every iteration
        for (let endIdx = gap; endIdx < array.length; endIdx++) { 
            // decrease j by gap every iteration
            for (let j = endIdx; j>= gap; j -= gap) {
                //compare array[j] and array[j-gap]
                if (array[j-gap] > array[j]) {
                    //swap array[j] and array[j-gap]
                    let temp = array[j];
                    array[j] = array[j-gap];
                    array[j-gap] = temp;
                } else {
                    break;
                }
            }
        }
    }
}

*/