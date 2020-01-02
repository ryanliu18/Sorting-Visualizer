export function getSelectionSortAnimations(array) {

    const animations = [];

    for (let i = 0; i < array.length -1; i++) {
        var min_idx = i;
        for (let j = i+1; j < array.length; j++) {
            animations.push([min_idx,j]);
            animations.push([min_idx,j]);
            if (array[j] < array[min_idx]) {
                min_idx = j;
            }
        }
        //swap value at index i with min value at index min_idx
        animations.push("Swap");
        animations.push([min_idx,array[i],i,array[min_idx]]);
        const temp = array[i];
        array[i] = array[min_idx];
        array[min_idx] = temp; 

    }

    return animations;
}

