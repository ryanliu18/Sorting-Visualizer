export function getHeapSortAnimations(array) {
    const animations = [];
    for (let i = array.length/2 -1; i >= 0; i--) {
        heapify(animations,array,array.length,i);
    }

    for (let i = array.length -1; i >= 0; i--) {

        animations.push("Swap");
        animations.push([0,array[i],i,array[0]]);
        //swap current index i (smallest element) to the beginning (index 0)
        const temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        //heapify on reduced heap
        heapify(animations,array,i,0)
    }

    return animations;
}

function heapify(animations,array,sizeOfHeap,rootIdx) {
    var largestOfRootAndChildrenIdx = rootIdx;
    const leftChildIdx = 2*rootIdx+1;
    const rightChildIdx = 2*rootIdx+2;

    if (leftChildIdx < sizeOfHeap) {
        animations.push([leftChildIdx,largestOfRootAndChildrenIdx]);
        animations.push([leftChildIdx,largestOfRootAndChildrenIdx]);
        if (array[leftChildIdx]> array[largestOfRootAndChildrenIdx]) {
            largestOfRootAndChildrenIdx = leftChildIdx;
        }
    }

    if (rightChildIdx < sizeOfHeap) {
        animations.push([rightChildIdx,largestOfRootAndChildrenIdx]);
        animations.push([rightChildIdx,largestOfRootAndChildrenIdx]);
        if (array[rightChildIdx] > array[largestOfRootAndChildrenIdx]) {
            largestOfRootAndChildrenIdx = rightChildIdx;
        }
    }

    if (largestOfRootAndChildrenIdx !== rootIdx) {
        //swap array[rootIdx] and array[largestOfRootAndChildrenIdx]
        animations.push("Swap");
        animations.push([rootIdx,array[largestOfRootAndChildrenIdx],largestOfRootAndChildrenIdx,array[rootIdx]]);

        const temp = array[rootIdx];
        array[rootIdx] = array[largestOfRootAndChildrenIdx];
        array[largestOfRootAndChildrenIdx] = temp;
        
        heapify(animations,array,sizeOfHeap,largestOfRootAndChildrenIdx);
    }


} 
/*
heapSort


function heapSort(array) {
    // Total O(n) time to buildHeap
    for (let i = array.length/2 -1; i >= 0; i--) {
        heapify(animations,array,array.length,i);
    }
    // iterate over heap
    for (let i = array.length -1; i >= 0; i--) {
        //swap max value (array[0]) to end of array at index i
        const temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        //heapify on reduced heap, to ensure next iteration works
        heapify(animations,array,i,0)
    }
}


function heapify(animations,array,sizeOfHeap,rootIdx) {
    var largestOfRootAndChildrenIdx = rootIdx;
    const leftChildIdx = 2*rootIdx+1;
    const rightChildIdx = 2*rootIdx+2;
    // if leftChildIdx is within array, and its value is larger than value at largestOfRootAndChildrenIdx, update
    if (leftChildIdx < sizeOfHeap && array[leftChildIdx]> array[largestOfRootAndChildrenIdx]) {
        largestOfRootAndChildrenIdx = leftChildIdx;
    }
    // if rightChildIdx is within array, and its value is larger than value at largestOfRootAndChildrenIdx, update
    if (rightChildIdx < sizeOfHeap && array[rightChildIdx] > array[largestOfRootAndChildrenIdx]) {
        largestOfRootAndChildrenIdx = rightChildIdx;
    }
    // if at least one of the previous 2 "if" statements were true
    if (largestOfRootAndChildrenIdx !== rootIdx) {
        //swap array[rootIdx] and array[largestOfRootAndChildrenIdx]
        const temp = array[rootIdx];
        array[rootIdx] = array[largestOfRootAndChildrenIdx];
        array[largestOfRootAndChildrenIdx] = temp;
        // recursive call on largest child as root
        heapify(animations,array,sizeOfHeap,largestOfRootAndChildrenIdx);
    }
}
*/