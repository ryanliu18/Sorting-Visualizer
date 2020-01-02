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