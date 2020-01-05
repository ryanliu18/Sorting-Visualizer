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

        <br/>
        <p>Code: (in JavaScript)</p>
        <img src="https://i.imgur.com/68lstzn.png" alt="" width="50%" height="43%"></img>
        `;
      }
  
      case 3: {
        return `<p><strong>Merge Sort</strong></p>`;
      }
      case 4: {
        return `<p><strong>Heap Sort</strong></p>`;
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