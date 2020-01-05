import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/mergeSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/bubbleSort';
import {getSelectionSortAnimations} from '../SortingAlgorithms/selectionSort';
import {getInsertionSortAnimations} from '../SortingAlgorithms/insertionSort';
import {getQuickSortAnimations} from '../SortingAlgorithms/quickSort';
import {getHeapSortAnimations} from '../SortingAlgorithms/heapSort';
import {getCocktailShakerSortAnimations} from '../SortingAlgorithms/cocktailShaker';
import {getShellSortAnimations} from '../SortingAlgorithms/shellSort';
import {displayAlgorithmInfo} from '../SortingAlgorithms/AlgorithmInfo';
import "../Components/Button.css";
import "../Components/Modal.css";
import "../Components/AlgorithmModal.css"

const ANIMATION_SPEED_MERGE_SORT  = 3.6; //smaller the speed value, the faster the sort

const ANIMATION_SPEED_BUBBLE_SORT = 0.6;

const ANIMATION_SPEED_SELECTION_SORT = 0.7;

const ANIMATION_SPEED_INSERTION_SORT = 1;

const ANIMATION_SPEED_QUICK_SORT = 2.7;

const ANIMATION_SPEED_HEAP_SORT = 2;

const ANIMATION_SPEED_COCKTAILSHAKER_SORT = 0.55;

const ANIMATION_SPEED_SHELL_SORT = 0.7;

var NUM_OF_BARS = 100;

const SCALING_FACTOR = 5.4;

const NORMAL_COLOUR = 'cyan';

const COMPARISON_COLOUR = 'black'; //black???

const FINISHED_SORTING_COLOUR = 'chartreuse'

var isRunning = false;

var slideNumber = 0;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.initializeArray();
    }

    initializeArray() {
        const array = []; 
        for (let i =1; i< NUM_OF_BARS+1; i++) {
            array.push(i*SCALING_FACTOR);
        }
        this.setState({array});

    }

    resetArray() {
        if (isRunning) return;
        const {array} = this.state;
        this.resetColor();
        this.shuffle(array);
        this.setState({array});
    }

    resetColor() {
        const allBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < allBars.length; i++) {
            allBars[i].style.backgroundColor = NORMAL_COLOUR;
        }
    }

    sortWithOutSwap(algorithm) { //Sorting Algorithms that DO NOT SWAP... hence use mod 3
        if (isRunning) return;
        isRunning = true;
        this.resetColor();
        let animations = [];
        let ANIMATION_SPEED = 0;

        if (algorithm === "mergeSort") {
            animations = getMergeSortAnimations(this.state.array);
            ANIMATION_SPEED = ANIMATION_SPEED_MERGE_SORT;
        }

        if (algorithm === "insertionSort") {
            animations = getInsertionSortAnimations(this.state.array);
            ANIMATION_SPEED = ANIMATION_SPEED_INSERTION_SORT;
        }

        for (let i = 0; i < animations.length; i++) {           //using var i = 0 doesnt work for some reason...

            const allBars = document.getElementsByClassName('array-bar');

            if (i % 3 === 0) {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = COMPARISON_COLOUR;
                    secondBar.style.backgroundColor = COMPARISON_COLOUR;
                }, i * ANIMATION_SPEED);

            } else if (i % 3 === 1) {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = NORMAL_COLOUR;
                    secondBar.style.backgroundColor = NORMAL_COLOUR;
                }, i * ANIMATION_SPEED);

            } else { //i % 3 === 2
                const [firstBarIdx,newHeight] = animations[i];
                const firstBar = allBars[firstBarIdx];
                setTimeout(() => {
                    firstBar.style.height = `${newHeight}px`;
                    if (i == animations.length -1) {
                        for (let j = 0; j < allBars.length; j++) {
                            allBars[j].style.backgroundColor = FINISHED_SORTING_COLOUR;
                        }
                        isRunning = false;
    //                console.log(isRunning);
                    }
                }, i * ANIMATION_SPEED);
            }

        }

    }

    sortWithSwap(algorithm) { //Sorting Algorithms that SWAP... hence use mod 2
        if (isRunning) return;
        isRunning = true;
        this.resetColor();

        let animations = [];
        let ANIMATION_SPEED = 0;

        if (algorithm === "bubbleSort") {
            animations = getBubbleSortAnimations(this.state.array);
            ANIMATION_SPEED = ANIMATION_SPEED_BUBBLE_SORT;
        }

        if (algorithm === "heapSort") {
            animations = getHeapSortAnimations(this.state.array);
            ANIMATION_SPEED = ANIMATION_SPEED_HEAP_SORT;
        }

        if (algorithm === "quickSort") {
            animations = getQuickSortAnimations(this.state.array);
            ANIMATION_SPEED = ANIMATION_SPEED_QUICK_SORT;
        }

        if (algorithm === "selectionSort") {
            animations = getSelectionSortAnimations(this.state.array);
            ANIMATION_SPEED = ANIMATION_SPEED_SELECTION_SORT;
        }

        if (algorithm === "cocktailShakerSort") {
            animations = getCocktailShakerSortAnimations(this.state.array);
            ANIMATION_SPEED = ANIMATION_SPEED_COCKTAILSHAKER_SORT;
        }

        if (algorithm === "shellSort") {
            animations = getShellSortAnimations(this.state.array);
            ANIMATION_SPEED = ANIMATION_SPEED_SHELL_SORT;
        }

        for (let i = 0; i < animations.length; i++) {           //using var i = 0 doesnt work for some reason...

            const allBars = document.getElementsByClassName('array-bar');

            if (i % 2 === 0) {
                if (animations[i] !== "Swap") {
//                    console.log(i);
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = COMPARISON_COLOUR;
                    secondBar.style.backgroundColor = COMPARISON_COLOUR;
                    }, i * ANIMATION_SPEED);
                } else {
                    i++;
                    const [firstBarIdx,newHeight1,secondBarIdx,newHeight2] = animations[i];
                    const firstBar = allBars[firstBarIdx];
                    const secondBar = allBars[secondBarIdx];
                    setTimeout(() => {
                        firstBar.style.height = `${newHeight1}px`;
                        secondBar.style.height = `${newHeight2}px`;
                        if (i == animations.length -1) {
                            for (let j = 0; j < allBars.length; j++) {
                                allBars[j].style.backgroundColor = FINISHED_SORTING_COLOUR;
                            }
                            isRunning = false;
                        }
    //                    console.log(isRunning);

                    }, i * ANIMATION_SPEED);

            }

            } else { // i % 2 === 1
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = NORMAL_COLOUR;
                    secondBar.style.backgroundColor = NORMAL_COLOUR;

                    if (i == animations.length -1) {
                        for (let j = 0; j < allBars.length; j++) {
                            allBars[j].style.backgroundColor = FINISHED_SORTING_COLOUR;
                        }
                        isRunning = false;
                    }
    //               console.log(isRunning);

                }, i * ANIMATION_SPEED);


        }


        }
    }

    bubbleSort() { 
        this.sortWithSwap("bubbleSort");
    }

    heapSort() {
        this.sortWithSwap("heapSort");
    }

    quickSort() {
        this.sortWithSwap("quickSort");
    }

    selectionSort() {
        this.sortWithSwap("selectionSort");
    }

    cocktailShakerSort() {
        this.sortWithSwap("cocktailShakerSort");
    }

    mergeSort() {
        this.sortWithOutSwap("mergeSort");
    }

    insertionSort() {
        this.sortWithOutSwap("insertionSort");
    }


    shellSort() {
        this.sortWithSwap("shellSort");

    }

    refreshPage() {
        window.location.reload();
      }


      openHelpMenu() {
        //make new jsx and css page for the helper menu
        // make sure background is not interactable when help menu is open
        // add X button to close
        // describe algorithms, link github repo site, add tutorial how to work, add motivation why we made the application
        // Get the modal
        var modal = document.getElementById("helpMenu");
        modal.style.display = "block";
    
        // Get the button that opens the modal
        var btn = document.getElementById("info-button");
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
    
        console.log(modal, btn, span);
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
        };
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
        this.changeText(1);
      }


      openAlgoMenu(info) {
        var modal = document.getElementById("algo-modal");
        modal.style.display = "block";
    
        // // Get the button that opens the modal
        // var btn = document.getElementById("info-button");
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("algo-close")[0];
    
        //console.log(modal, btn, span);
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
        };
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
        document.getElementById(
          "algo-modal-content"
        ).innerHTML = displayAlgorithmInfo(info);
      }

  changeText(next) {
    const MAXSLIDE = 5;
    const MINSLIDE = 1;

    if (next == 1) {
      if (slideNumber === MAXSLIDE) {
        slideNumber = MAXSLIDE;
      } else {
        slideNumber += next;
      }
    } else {
      if (slideNumber === MINSLIDE) {
        slideNumber = MINSLIDE;
      } else {
        slideNumber += next;
      }
    }
    switch (slideNumber) {
      case 1: {
        document.getElementById("helpMenu-content").innerHTML =
          this.HTMLHelper(MAXSLIDE) +
          `
        <h2 style= "margin-top: -0.3em;"> Welcome to our Sorting Algorithms Visualizer </h2> 
        <h3 style= "margin-top: -0.7em;"> Made by Ryan L. and Eric K.</h3>
        <p> Our pathfinding application simulates multiple pathfinding algorithms. Pathfinding algorithms 
        attempt to compute the shortest path from one point to another. Pathfinding is a fundamental component used in the world every day, from using
         Google maps to find the shortest route, to directing autonomous robots to minimize the amount of turning, braking or specific application requirements. Our application
         simulates a maze with walls. </p>
        <p> Click on <strong>Next</strong> to continue the tutorial. Otherwise click anywhere outside the box, or the <strong>X</strong> button to play around with our application</p>
        <p><img style="display: block; margin-left: auto; margin-right: auto; margin-top: -2.8em;" src="https://i.ibb.co/P9fVVW8/slide0-png.png" alt="" width="225" height="235" /></p>`;
        break;
      }

      case 2: {
        document.getElementById("helpMenu-content").innerHTML =
          this.HTMLHelper(MAXSLIDE) +
          `<h2 style= "margin-top: -0.3em;">Motivation</h2>
        <p> We wanted to make this application because when first learning about sorting algorithms, we found it was difficult to imagine the algorithms running in our heads just looking
        at the code. And so, we created this application where you can not only learn about common sorting algorithms, but also visualize them in a centralized platform. We hope that this
        application will help you learn and understand why, and how these sorting algorithms work in a concise and visual manner, while hopefully having a fun experience along the way!
        </p>
        <p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://image.flaticon.com/icons/png/512/584/584641.png" alt="" width="129" height="129" /></p>`;
        break;
      }

      case 3: {
        document.getElementById("helpMenu-content").innerHTML =
          this.HTMLHelper(MAXSLIDE) +
          `<h2 style= "margin-top: -0.3em;"> How to Use </h2>
        <p style = "line-height: 1.15em;"> Click and drag anywhere on the grid to draw some walls. You can also 
        drag and move the start and end nodes to your desired location. On the left side, select the algorithm
        you want to visualize. If there is no path from the start node to the end node, the path will be <span style = "color: red;"> <strong>red</strong></span>. Otherwise, the path will be <span style = "color: yellow;"> <strong>yellow</strong></span> and the area explored by the algorithm
        will be <span style = "color: green;"> <strong>green</strong></span>. Press <strong>Clear Board</strong> if you want to start from scratch, or <Strong>Clear Path</strong> if you want to visualize another algorithm with the same walls.
        We also made templates of mazes at the top of our application. Finally, click on the <strong>?</strong> button to view this tutorial again.</p>

        <table style="height: 108px; width: 190; margin-left: auto; margin-right: auto;">
        <tbody>
        <tr style="height: 33.8px;">
        <td style="width: 65px; height: 33.8px; text-align: center;"><img src="https://icons-for-free.com/iconfiles/png/512/double+arrow+doublechevronright+right+arrows+icon-1320185729292506033.png" alt="" width="27" height="27" /></td>
        <td style="width: 116px; height: 33.8px; text-align: left;">= startNode</td>
        </tr>
        <tr style="height: 17px;">
        <td style="width: 65px; height: 17px; text-align: center;"><img src="https://i.pinimg.com/originals/ba/3f/f2/ba3ff2209d0c43655116b31f8e2bbd65.png" alt="" width="27" height="27" /></td>
        <td style="width: 116px; height: 17px; text-align: left;">= finishNode</td>
        </tr>
        </tbody>
        </table>
        <p>&nbsp;</p>
        `;
        break;
      }

      case 4: {
        document.getElementById("helpMenu-content").innerHTML =
          this.HTMLHelper(MAXSLIDE) +
          `<h2 style= "margin-top: -0.3em;"> Algorithms </h2>
        <ol style = "text-align: left; line-height: 1.05em">
          <li><strong>Dijkstra's Algorithm</strong> - Guarantees the shortest path by exploring the closest unvisited nodes from the start node. Going from one node to another has a cost/distance of 1</li>
          <li><strong>Breadth-First Search</strong> - Guarantees the shortest path by exploring all nodes by layers, or in other words, exploring all the neighbouring nodes before moving to the next-level neighbour nodes  </li>
          <li><strong>Depth-First Search</strong> -  Does not guarantee the shortest path. DFS traverses a maze as deep as far as possible, and then comes back to a fixed point and repeats the process again</li>
          <li><strong>Iterative Deepening Depth First Search</strong> - Does not guarantee the shortest path. IDDFS is a depth-limited version of depth-first search that is run repeatedly with increasing depth limits until the goal is found </li>
          <li><strong>A*</strong> - Guarantees the shortest path. Uses heuristic estimated costs and exact costs, and balances the two costs to estimate how far from the goal any node is.  </li>
          <li><strong>Greedy Best First Search</strong> -  Does not guarantee the shortest path. Uses heuristics as well to guide its way toward the goal, focusing on paths that lead towards the direction of the finish node. </li>
          <li><strong>BiDirectional BFS</strong> -  Performs BFS on both the start and finish node and stops when the two searches intersect with one another</li>
        </ol>`;
        break;
      }

      case 5: {
        document.getElementById("helpMenu-content").innerHTML =
          this.HTMLHelper(MAXSLIDE) +
          `<h2 style= "margin-top: -0.3em;"> Last Words </h2>
          <p> We hope you have fun with this application. Please feel free to contact any of us for feedback on the application. You
          can also check out our Github source code at <a href = "https://github.com/ryanliu18/Sorting-Visualizer" target="_blank">Sorting Algorithms Visualizer</a> </p>          
          <table style="height: 227px; margin-left: auto; margin-right: auto; width: 552px;">
          <tbody>
          <tr>
          <td style="width: 157px;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.ibb.co/V9qg42q/Eric-Kuo-UBC-Card.jpg" alt="" width="110" height="147" /></td>
          <td style="width: 199px;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://image.flaticon.com/icons/png/512/87/87090.png" alt="" width="152" height="152" /></td>
          <td style="width: 179px;"><img style="display: block; margin-left: auto; margin-right: auto;" src="https://i.ibb.co/jgZ7fF9/81928054-601968013933600-5665482190398423040-n.jpg" alt="" width="130" height="147" /></td>
          </tr>
          <tr>
          <td style="width: 157px; text-align: center;"><a href="https://www.linkedin.com/in/eric-k-1198b6192/" target = "_blank">LinkedIn Eric Kuo</a></td>
          <td style="width: 199px; text-align: center;">&nbsp;</td>
          <td style="width: 179px; text-align: center;"><a href="https://www.linkedin.com/in/ryan-liu18/" target = "_blank">LinkedIn Ryan Liu</a></td>
          </tr>
          </tbody>
          </table>
        `;
        break;
      }

      default:
        break;
    }

    var prevBtn = document.getElementById("Prev");
    var nextBtn = document.getElementById("Next");
    if (slideNumber === MINSLIDE) {
      prevBtn.style.backgroundColor = "lightgrey";
      prevBtn.disabled = true;
    } else if (slideNumber === MAXSLIDE) {
      nextBtn.disabled = true;
      nextBtn.style.backgroundColor = "lightgrey";
    } else {
      console.log("reached here");
      prevBtn.disabled = false;
      prevBtn.style.backgroundColor = "hsl(214, 100%, 70%)";
      nextBtn.disabled = false;
      nextBtn.style.backgroundColor = "hsl(214, 100%, 70%)";
    }
  }


  HTMLHelper(MAXSLIDE) {
    return (
      `<p> ` +
      slideNumber +
      `/` +
      MAXSLIDE +
      `<p>
  `
    );
  }

  

    render() {
        const{array} = this.state;

        return (
        <>
        <div className="title-container">
        <div className="title" onClick={() => this.refreshPage()}>
          Sorting Algorithms Visualizer
        </div>

        <div className="title-button-row">
          <button onClick={() => this.resetArray()}> Scramble! </button>

          <button
            id="info-button"
            className="info-button"
            onClick={() => this.openHelpMenu()}
          >
            {" "}
            ?{" "}
          </button>
          </div>
            </div>

        <div id="helpMenu" className="modal">
          <div className="modal-container">
            <span id="close" className="close">
              &times;
            </span>
            <div className="buttons-container">
              <div className="info-buttons">
                <button id="Prev" onClick={() => this.changeText(-1)}>
                  {" "}
                  Prev{" "}
                </button>
                <button id="Next" onClick={() => this.changeText(1)}>
                  {" "}
                  Next{" "}
                </button>
              </div>
            </div>
          </div>
          <div id="helpMenu-content" className="modal-content"></div>
        </div>

        <div id="algo-modal" className="algo-modal">
          <span id="algo-close" className="algo-close">
            &times;
          </span>
          <div id="algo-modal-content" className="algo-modal-content"></div>
        </div>

        <div className="container">
          <div className="algo-btn-group">
            <button onClick={() => this.openAlgoMenu(0)}> &#9432; </button>
            <button onClick={() => this.openAlgoMenu(1)}> &#9432; </button>
            <button onClick={() => this.openAlgoMenu(2)}> &#9432; </button>
            <button onClick={() => this.openAlgoMenu(3)}> &#9432; </button>
            <button onClick={() => this.openAlgoMenu(4)}> &#9432; </button>
            <button onClick={() => this.openAlgoMenu(5)}> &#9432; </button>
            <button onClick={() => this.openAlgoMenu(6)}> &#9432; </button>
            <button onClick={() => this.openAlgoMenu(7)}> &#9432; </button>
          </div>

            <div className = "btn-group">
            <button onClick = {() => this.bubbleSort()}> Bubble Sort</button> 
            <button onClick = {() => this.selectionSort()}> Selection Sort</button> 
            <button onClick = {() => this.insertionSort()}> Insertion Sort</button> 
            <button onClick = {() => this.mergeSort()}> Merge Sort</button> 
            <button onClick = {() => this.heapSort()}> Heap Sort</button> 
            <button onClick = {() => this.quickSort()}> Quick Sort</button> 
            <button onClick = {() => this.cocktailShakerSort()}> Cocktail Shaker Sort</button> 
            <button onClick = {() => this.shellSort()}> Shell Sort</button> 
            </div>


            <div className="array-container">
            {array.map((value,idx) => (
                <div className = "array-bar" key = {idx} style = {{height: `${value}px`}}>
                </div>
            ))}

            

        </div>
        </div>
 
        </>
        );
    }


//From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min (inclusive) and max (inclusive).
 getRandomInt(min,max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
 
    // From https://javascript.info/task/shuffle
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      

}