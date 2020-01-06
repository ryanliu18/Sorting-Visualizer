export function getCocktailShakerSortAnimations(array) {
    const animations = [];

    let startIdx = 0;
    let endIdx = array.length -1;
    let swapped = true;

    while(swapped) {
        swapped = false;
        //forward pass left to right
        for (let i = startIdx; i < endIdx; i++) {
            animations.push([i,i+1]);
            animations.push([i,i+1]);
            if (array[i] > array[i+1]) {
                animations.push("Swap");
                animations.push([i,array[i+1],i+1,array[i]]);
                //swap array[i] and array[i+1]
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break;
        swapped = false;

        endIdx--;

        //backward pass right to left
        for (let i = endIdx-1; i >= startIdx; i--) {
            animations.push([i,i+1]);
            animations.push([i,i+1]);
            if (array[i] > array[i+1]) {
                animations.push("Swap");
                animations.push([i,array[i+1],i+1,array[i]]);
                //swap array[i] and array[i+1]
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }


        startIdx++;

    }


    
    return animations;
}

/*

cocktailShakerSort

function cocktailShakerSort(array) {
    let startIdx = 0;
    let endIdx = array.length -1;
    let swapped = true;

    // if no swaps happened during backward pass, exit
    while(swapped) {
        swapped = false;
        //forward pass left to right
        for (let i = startIdx; i < endIdx; i++) {
            // compare adjacent elements
            if (array[i] > array[i+1]) {
                //swap array[i] and array[i+1]
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
        // if no swaps occurred during forward pass, exit
        if (!swapped) break;
        swapped = false;
        // decrement endIdx, since last index has 
        // the correct largest element
        endIdx--;
        //backward pass right to left
        for (let i = endIdx-1; i >= startIdx; i--) {
            // compare adjacent elements
            if (array[i] > array[i+1]) {
                //swap array[i] and array[i+1]
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
        // increment startIdx, since first index has 
        // the correct smallest element
        startIdx++;
    }
}

*/