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