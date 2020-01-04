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
                }
            }
        }
    }

    return animations;
}