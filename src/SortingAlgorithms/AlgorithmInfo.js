export function displayAlgorithmInfo(info) {
    switch (info) {
      case 0: {
        return  `<br> <span style = "color: cyan; font-size: 200%;"> <strong><u>Bubble Sort</u></strong></span> 
                <br>
                <br/>
                <p>This is one of the simplest sorting algorithms. We simply iterate over the array,
                checking each adjacent pair of values and swapping them if out of order. After each iteration,
                the largest value would have "bubbled" to the right, hence the name Bubble sort. Thus, at the
                end of all iterations, the array is in sorted order.</p>

                <p><strong><u> Runtime: </u> </strong></p>
                <table style ="width:50%" border="3px solid black" border-collapse="collapse" align = "center">
                <tr>
                <th>Best Case</th>
                <th>Average Case</th>
                <th>Worst Case</th>
                </tr>
                <tr>
                <th>O(n) </th>
                <th>O(n^2)</th>
                <th>O(n^2)</th>
                </tr>
                </table>

                <p>Note: To get O(n) best case runtime, we need to initialize a boolean to false, and if any 
                swap occurs during the first iteration, we set it to true. If the boolean is still false, this
                means the array is already sorted and we exit. Otherwise, continue bubble sort normally.</p>

                <p> O(n^2) comes from the double for loop. You can think of this as having the following number
                of total comparisions:
                n + n-1 + ... + 2 + 1 = n(n+1)/2 = O(n^2).</p></p>

                <p><strong><u>Code: (in JavaScript)</u></strong></p>
                <img src="https://i.imgur.com/WLNFw0J.png" alt="" width="60%" height="40%"></img>
                `;
                
      }
  
      case 1: {
        return `<br><span style = "color: cyan; font-size: 200%;"> <strong><u>Selection Sort</u></strong></span> 
        <br>
        <br/>
        <p>We simply find the minimum value in the entire array, and place it at the start. 
        We iterate this process for the remaining n-1 elements. (then n-2, n-3, ... 1 elements)
         So after we iterate through the entire array, it is sorted.</p>

        <p><strong><u> Runtime: </u> </strong></p>
        <table style ="width:50%" border="3px solid black" border-collapse="collapse" align = "center">
        <tr>
        <th>Best Case</th>
        <th>Average Case</th>
        <th>Worst Case</th>
        </tr>
        <tr>
        <th>O(n^2)</th>
        <th>O(n^2)</th>
        <th>O(n^2)</th>
        </tr>
        </table>

        <p>O(n^2) comes from the double for loop. You can think of this as having the following number
        of total comparisions:
        n + n-1 + ... + 2 + 1 = n(n+1)/2 = O(n^2).</p>

        <p><strong><u>Code: (in JavaScript)</u></strong></p>
        <img src="https://i.imgur.com/2ToyycQ.png" alt="" width="50%" height="43%"></img>
        `;
      }
  
      case 2: {
        return `<br><span style = "color: cyan; font-size: 200%;"> <strong><u>Insertion Sort</u></strong></span> 
        <br>
        <br/>
        <p>This is how we sort our hand in card games. We iterate over the array, and for each
        element at index i, we place it at some index j, where <br> 0 <= j <= i such that the sub array 
        from indices 0...i-1,i is sorted. Thus at the end of all iterations, the entire array is sorted.</p>

        <p><strong><u> Runtime: </u> </strong></p>
        <table style ="width:50%" border="3px solid black" border-collapse="collapse" align = "center">
        <tr>
        <th>Best Case</th>
        <th>Average Case</th>
        <th>Worst Case</th>
        </tr>
        <tr>
        <th>O(n)</th>
        <th>O(n^2)</th>
        <th>O(n^2)</th>
        </tr>
        </table>

        <p>O(n) best case is because if the array is already sorted, we will never enter the inner while loop,
        so Insertion Sort is just a for loop iterating over the array. O(n^2) worst case comes from the 
        number of executions of the inner while loop, which is up to i times. (j = i-1 to j = 0) You can think of this as having the following number
        of total comparisions:
        1 + 2 + 3 + ... + n-1 + n = n(n+1)/2 = O(n^2). </p>

        <p><strong><u>Code: (in JavaScript)</u></strong></p>
        <img src="https://i.imgur.com/68lstzn.png" alt="" width="50%" height="43%"></img>
        `;
      }
  
      case 3: {
        return `<br><span style = "color: cyan; font-size: 200%;"> <strong><u>Merge Sort</u></strong></span> 
        <br>
        <br/>
        <p>This is a simple example of a Divide and Conquer algorithm. If the array has size 1, it is sorted 
        and we return it. Otherwise, we divide the array by half, and sort each half by Merge Sort. We then
        have two individually sorted half arrays, and now we merge them into a final sorted array.</p>

        <p><strong><u> Runtime: </u> </strong></p>
        <table style ="width:50%" border="3px solid black" border-collapse="collapse" align = "center">
        <tr>
        <th>Best Case</th>
        <th>Average Case</th>
        <th>Worst Case</th>
        </tr>
        <tr>
        <th>O(nlogn)</th>
        <th>O(nlogn)</th>
        <th>O(nlogn)</th>
        </tr>
        </table>

        <p>Since Merge Sort is recursive, it can be defined by the following recurrence relation: 
        T(n) <= 2T(n/2) +cn, where T(n) is the runtime of Merge Sort on an input of size n, and c is some positive constant.
        The 2T(n/2) comes from the two recursive calls, and the cn from the merge step. Solving this relation with
        substitution, we see T(n) = O(nlogn) (forgive the Abuse of Notation)</p>

        <p><strong><u>Code: (in JavaScript)</u></strong></p>
        <img src="https://i.imgur.com/1H7CVWu.png" alt="" width="55%" height="45%"></img>
        <img src="https://i.imgur.com/LMvIT6E.png" alt="" width="55%" height="80%"></img>
        `;
      }
      case 4: {
        return `<br><span style = "color: cyan; font-size: 200%;"> <strong><u>Heap Sort</u></strong></span> 
        <br>
        <br/>
        <p> We use a binary max Heap to implement Heap Sort. A heap is a data structure that satisfies a structural property, 
        and an ordering property. A heap is a complete tree, and every parent node has value >= or <= the value of it's children nodes. 
        (depending on if max Heap or min Heap) So, in a max Heap the root node (at index 0) is the max value, and in a min Heap the root node is the min value.
        A heap is commonly used to efficiently implement a priority queue. 
        <br>
        <br>
        The idea of Heap Sort, is to first make the given array into a Heap, by calling "buildHeap". (the first for loop)
        After the array is a Heap, we swap the root node, which is the max value to the end of the arrayso it is now in its correct
        place. We then call heapify on the reduced Heap to ensure it is still a Heap, so we can swap the root node again on
        the next iteration. After n swaps, the array is sorted.
        </p>

        <p><strong><u> Runtime: </u> </strong></p>
        <table style ="width:50%" border="3px solid black" border-collapse="collapse" align = "center">
        <tr>
        <th>Best Case</th>
        <th>Average Case</th>
        <th>Worst Case</th>
        </tr>
        <tr>
        <th>O(nlogn)</th>
        <th>O(nlogn)</th>
        <th>O(nlogn)</th>
        </tr>
        </table>
        <p>Note: This is assuming distinct elements. If non-distinct elements, best case is O(n) if all elements are equal,
        since the runtime of heapify goes from O(logn) to O(1). (since the recursive calls will never execute)</p>

        <p>The first for loop (buildHeap) takes O(n) time. (since we do not call heapify of the last half of nodes, 
          which are leaves and so are already Heaps) Then, we iterate over the array and perform n calls to heapify.
          The worst case runtime of heapify is O(logn), since a Heap is a complete tree, thus we are guaranteed a height of at
          most logn. So the max number of recursive calls is logn, each with a constant amount of work. 
          We see the total runtime of heapSort = O(nlogn).</p>

        <p><strong><u>Code: (in JavaScript)</u></strong></p>
        <img src="https://i.imgur.com/ZeA54C4.png" alt="" width="55%" height="45%"></img>
        <img src="https://i.imgur.com/n8q8XS7.png" alt="" width="65%" height="45%"></img>
        `;
      }
      case 5: {
        return `<br><span style = "color: cyan; font-size: 200%;"> <strong><u>Quick Sort</u></strong></span> 
        <br>
        <br/>
        <p>This is another example of a Divide and Conquer algorithm, and is similar to Merge Sort. The general idea is to pick a pivot element,
        and then partition all elements less than this pivot to the left of it, and all elements greater than the pivot to the right of it.
        So, there are many versions of Quick Sort, that differ in how they select the pivot. In our implementation, we always pick the last element as 
        the pivot. After we perform this partitioning of the array, we then perform Quick Sort on the sub array to the left of the pivot,
        and Quick Sort on the sub array to the right of the pivot. At the end, the array is sorted.
        </p>

        <p><strong><u> Runtime: </u> </strong></p>
        <table style ="width:50%" border="3px solid black" border-collapse="collapse" align = "center">
        <tr>
        <th>Best Case</th>
        <th>Average Case</th>
        <th>Worst Case</th>
        </tr>
        <tr>
        <th>O(nlogn)</th>
        <th>O(nlogn)</th>
        <th>O(n^2)</th>
        </tr>
        </table>
        <p>Note: We can get O(n) best case for Quick Sort if we use "three-way partition and equal keys"</p>
        <p>For average case, we assume the pivot will partition the array into two roughly similarly sized "halves". Let's say
        for simplicity, the two "halves" have size upper bounded by 2n/3. 
        So, we can describe Quick Sort by the following recurrence relation: T(n) <= cn + 2T(2n/3), where c is some positive constant.
        The cn comes from the runtime of "partition", and 2T(2n/3) from the two recursive calls to Quick Sort. Solving with substitution, we see
        T(n) = O(nlogn).  </p>

        <p>For worst case, this occurs when the pivot picked is always the largest or smallest element of the array.
        Thus, one side of the partition will always be empty, reducing the efficiency of Quick Sort significantly.
        In this case, we can model the situation by the following recurrence relation: T(n) <= cn + T(n-1) for some positive constant
        c. T(n-1) is because we now only have one recursive call, on an array of size n-1. Solving by substitution, we see
        T(n) = O(n^2).  
        Alternatively, we see that the work done by partition is like n + n-1 + n-2 + ... + 2 + 1, which is = n(n+1)/2 = O(n^2) </p>

        <p><strong><u>Code: (in JavaScript)</u></strong></p>
        <img src="https://i.imgur.com/IznX2TT.png" alt="" width="55%" height="45%"></img>
        <img src="https://i.imgur.com/fXjteJm.png" alt="" width="55%" height="60%"></img>
        `;
      }
      case 6: {
        return  `<br><span style = "color: cyan; font-size: 200%;"> <strong><u>Cocktail Shaker Sort</u></strong></span> 
                <br>
                <br/>
                <p>This is a slight modification of Bubble Sort, hence the alternative name, "Bidirectional Bubble Sort". There
                are two "passes", the forward pass, and then the backward pass. We perform Bubble Sort on each pass, but the first pass
                will "bubble" the largest element to the last index of the array, and then on the backward pass the smallest element will
                be "bubbled" to the first index of the array. We increment the first index and decrement the last index, and continue this 
                process until no swaps happen, which is our termination condition as this tells us the array is sorted.</p>

                <p><strong><u> Runtime: </u> </strong></p>
                <table style ="width:50%" border="3px solid black" border-collapse="collapse" align = "center">
                <tr>
                <th>Best Case</th>
                <th>Average Case</th>
                <th>Worst Case</th>
                </tr>
                <tr>
                <th>O(n) </th>
                <th>O(n^2)</th>
                <th>O(n^2)</th>
                </tr>
                </table>

                <p>Runtimes are exactly the same as for Bubble Sort. Note: implementation below contains the "swapped"
                boolean necessary for O(n) best case runtime.</p>

                <p><strong><u>Code: (in JavaScript)</u></strong></p>
                <img src="https://i.imgur.com/uL2Xgql.png" alt="" width="40%" height="74%"></img>
                `;
      }
      case 7: {
        return `<br><span style = "color: cyan; font-size: 200%;"> <strong><u>Shell Sort</u></strong></span> 
        <br>
        <br/>
        <p> This is a variation on Insertion Sort. It is essentially trying to speed up Insertion Sort, since
        insertion sort is slow when you are inserting an item far away from where it belongs. In Shell Sort, we start off by "gap insertion sorting" elements,
        with a "gap" distance away from each other. We progressively decrease this gap using a gap sequence. 
        There are many different ways to choose gap sequences. We use a simple 
        floor(n/2), floor(n/4), ... , 1 gap sequence for simplicity. There exist more optimal gap sequences. 
        But, all gap sequences must end with 1, so that we perform Insertion Sort 
        at the very last iteration, guaranteeing the array is sorted.
        </p>

        <p><strong><u> Runtime: </u> </strong></p>
        <table style ="width:50%" border="3px solid black" border-collapse="collapse" align = "center">
        <tr>
        <th>Best Case</th>
        <th>Average Case</th>
        <th>Worst Case</th>
        </tr>
        <tr>
        <th>O(nlogn)</th>
        <th>O(nlogn)</th>
        <th>O(n^2)</th>
        </tr>
        </table>

        <p>For best case, this is when the array is sorted, and so each step in the gap sequence takes roughly n time. 
        (innermost for loop breaks after one iteration) There are logn steps in the gap sequence by definition, so the runtime
        is O(nlogn). 
        <br>
        <br>
        For worst case, we know that worst case for insertion sort is O(n^2). (Assume n is a power of 2 for simplicity)
        So for the final iteration when gap = 1, it takes at most n^2 time. For the iteration before when gap = 2, it takes at most
        n^2/2 time. Continuing on, we get the runtime is <= n^2(1 + 1/2 + 1/4 + ... ) = 2n^2 = O(n^2)</p>

        <p><strong><u>Code: (in JavaScript)</u></strong></p>
        <img src="https://i.imgur.com/aM083nL.png" alt="" width="60%" height="55%"></img>
        `;
      }
      default: {
        return `<p>Sorry, an unexpected error occured, please refresh</p>`;
      }
    }
  }