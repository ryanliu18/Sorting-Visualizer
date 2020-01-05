export function displayAlgorithmInfo(info) {
    switch (info) {
      case 0: {
        return  `<p><strong>Bubble Sort</strong></p>

                <br/>
                <p>This is one of the simplest sorting algorithms. We simply iterate over the array,
                checking each adjacent pair of values and swapping them if out of order. After each iteration,
                the largest value would have "bubbled" to the right, hence the name Bubble sort. Thus, at the
                end of all iterations, the array is in sorted order.</p>

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

                <p>        O(n^2) comes from the double for loop. </p>

                <p>Code: (in JavaScript)</p>
                <img src="https://i.imgur.com/WLNFw0J.png" alt="" width="60%" height="40%"></img>
                `;
                
      }
  
      case 1: {
        return `<p><strong>Selection Sort</strong></p>

        <br/>
        <p>We simply find the minimum value in the entire array, and place it at the start. 
        We iterate this process for the remaining n-1 elements. (then n-2, n-3, ... 1 elements)
         So after we iterate through the entire array, it is sorted.</p>

        <br/>
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

        <p>O(n^2) comes from the double for loop.</p>
        <br/>
        <p>Code: (in JavaScript)</p>
        <img src="https://i.imgur.com/2ToyycQ.png" alt="" width="50%" height="43%"></img>
        `;
      }
  
      case 2: {
        return `<p><strong>Insertion Sort</strong></p>

        <br/>
        <p>This is how we sort our hand in card games. We iterate over the array, and for each
        element at index i, we place it at some index j, where <br> 0 <= j <= i such that the sub array 
        from indices 0...i-1,i is sorted. Thus at the end of all iterations, the entire array is sorted.</p>

        <br/>
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
        number of executions of the inner while loop, which is up to i times. (j = i-1 to j = 0)</p>

        <br/>
        <p>Code: (in JavaScript)</p>
        <img src="https://i.imgur.com/68lstzn.png" alt="" width="50%" height="43%"></img>
        `;
      }
  
      case 3: {
        return `<p><strong>Merge Sort</strong></p>
        <br/>
        <p>This is a simple example of a Divide and Conquer algorithm. If the array has size 1, it is sorted 
        and we return it. Otherwise, we divide the array by half, and sort each half by Merge Sort. We then
        have two individually sorted half arrays, and now we merge them into a final sorted array.</p>

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

        <br/>
        <p>Code: (in JavaScript)</p>
        <img src="https://i.imgur.com/1H7CVWu.png" alt="" width="55%" height="45%"></img>
        <img src="https://i.imgur.com/LMvIT6E.png" alt="" width="55%" height="80%"></img>
        `;
      }
      case 4: {
        return `<p><strong>Heap Sort</strong></p>
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
        since the runtime of heapify goes from O(logn) to O(1).</p>

        <p>The first for loop (buildHeap) takes O(n) time. (since we do not call heapify of the last half of nodes, 
          which are leaves and so are already Heaps) Then, we iterate over the array and perform n calls to heapify.
          The worst case runtime of heapify is O(logn), since a Heap is a complete tree, thus we are guaranteed a height of at
          most logn. So, the total runtime of heapSort is O(n + nlogn) = O(nlogn).</p>

        <br/>
        <p>Code: (in JavaScript)</p>
        <img src="https://i.imgur.com/ZeA54C4.png" alt="" width="55%" height="45%"></img>
        <img src="https://i.imgur.com/n8q8XS7.png" alt="" width="65%" height="45%"></img>
        `;
      }
      case 5: {
        return `<p><strong>Quick Sort</strong></p>`;
      }
      case 6: {
        return `<p><strong>Cocktail Shaker Sort</strong></p>`;
      }
      case 7: {
        return `<p><strong>Shell Sort</strong></p>`;
      }
      default: {
        return `<p>Sorry, an unexpected error occured, please refresh</p>`;
      }
    }
  }