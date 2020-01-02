import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/mergeSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/bubbleSort';
import {getSelectionSortAnimations} from '../SortingAlgorithms/selectionSort';
import {getInsertionSortAnimations} from '../SortingAlgorithms/insertionSort';
import {getQuickSortAnimations} from '../SortingAlgorithms/quickSort';
import {getHeapSortAnimations} from '../SortingAlgorithms/heapSort';
import "../Components/Button.css";

const ANIMATION_SPEED_MERGE_SORT  = 2; //smaller the speed value, the faster the sort

const ANIMATION_SPEED_BUBBLE_SORT = 0.25;

const ANIMATION_SPEED_SELECTION_SORT = 0.7;

const ANIMATION_SPEED_INSERTION_SORT = 1;

const ANIMATION_SPEED_QUICK_SORT = 1.5;

const ANIMATION_SPEED_HEAP_SORT = 1.2

var NUM_OF_BARS = 100;

const SCALING_FACTOR = 4;

const NORMAL_COLOUR = 'cyan';

const COMPARISON_COLOUR = 'black'; //black???

const FINISHED_SORTING_COLOUR = 'chartreuse'

var isRunning = false;

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

    bubbleSort() {

        if (isRunning) return;
        isRunning = true;
        this.resetColor();

        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {           //using var i = 0 doesnt work for some reason...

            const allBars = document.getElementsByClassName('array-bar');

            if (i % 3 === 0) {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = COMPARISON_COLOUR;
                    secondBar.style.backgroundColor = COMPARISON_COLOUR;
                }, i * ANIMATION_SPEED_BUBBLE_SORT);

            } else if (i % 3 === 1) {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = NORMAL_COLOUR;
                    secondBar.style.backgroundColor = NORMAL_COLOUR;
                }, i * ANIMATION_SPEED_BUBBLE_SORT);

            } else { //i % 3 === 2
                if (animations[i] !== "Did Not Swap") {
                const [firstBarIdx,newHeight1,secondBarIdx,newHeight2] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.height = `${newHeight1}px`;
                    secondBar.style.height = `${newHeight2}px`;
                    if (i === animations.length -1) {
                        for (let j = 0; j < allBars.length; j++) {
                            allBars[j].style.backgroundColor = FINISHED_SORTING_COLOUR;
                        }
                        isRunning = false;
                    }
//                    console.log(isRunning);

                }, i * ANIMATION_SPEED_BUBBLE_SORT);
            } else {
                setTimeout(() => {
                if (i === animations.length -1) {
                    for (let j = 0; j < allBars.length; j++) {
                        allBars[j].style.backgroundColor = FINISHED_SORTING_COLOUR;
                    }
                    isRunning = false;
                }
//                console.log(isRunning);
                }, i*ANIMATION_SPEED_BUBBLE_SORT);
            }
        }


        }

    }

    mergeSort() {
        if (isRunning) return;
        isRunning = true;
        this.resetColor();


        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {           //using var i = 0 doesnt work for some reason...

            const allBars = document.getElementsByClassName('array-bar');

            if (i % 3 === 0) {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = COMPARISON_COLOUR;
                    secondBar.style.backgroundColor = COMPARISON_COLOUR;
                }, i * ANIMATION_SPEED_MERGE_SORT);

            } else if (i % 3 === 1) {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = NORMAL_COLOUR;
                    secondBar.style.backgroundColor = NORMAL_COLOUR;
                }, i * ANIMATION_SPEED_MERGE_SORT);

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
                }, i * ANIMATION_SPEED_MERGE_SORT);
            }


        }

    }

    heapSort() {


        if (isRunning) return;
        isRunning = true;
        this.resetColor();

        const animations = getHeapSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {           //using var i = 0 doesnt work for some reason...

            const allBars = document.getElementsByClassName('array-bar');

            if (i % 2 === 0) {
                if (animations[i] !== "Swap") {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = COMPARISON_COLOUR;
                    secondBar.style.backgroundColor = COMPARISON_COLOUR;
                    }, i * ANIMATION_SPEED_HEAP_SORT);
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

                    }, i * ANIMATION_SPEED_HEAP_SORT);

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

                }, i * ANIMATION_SPEED_HEAP_SORT);


        }


        }


    }

    quickSort() {
        if (isRunning) return;
        isRunning = true;
        this.resetColor();

        const animations = getQuickSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {           //using var i = 0 doesnt work for some reason...

            const allBars = document.getElementsByClassName('array-bar');

            if (i % 2 === 0) {
                if (animations[i] !== "Swap") {
                    console.log(i);
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = COMPARISON_COLOUR;
                    secondBar.style.backgroundColor = COMPARISON_COLOUR;
                    }, i * ANIMATION_SPEED_QUICK_SORT);
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

                    }, i * ANIMATION_SPEED_QUICK_SORT);

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

                }, i * ANIMATION_SPEED_QUICK_SORT);


        }


        }


    }

    selectionSort() {
        if (isRunning) return;
        isRunning = true;
        this.resetColor();

        const animations = getSelectionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {           //using var i = 0 doesnt work for some reason...

            const allBars = document.getElementsByClassName('array-bar');

            if (i % 2 === 0) {
                if (animations[i] !== "Swap") {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = COMPARISON_COLOUR;
                    secondBar.style.backgroundColor = COMPARISON_COLOUR;
                    }, i * ANIMATION_SPEED_SELECTION_SORT);
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

                    }, i * ANIMATION_SPEED_SELECTION_SORT);

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

                }, i * ANIMATION_SPEED_SELECTION_SORT);


        }


        }



    }

    insertionSort() {
        if (isRunning) return;
        isRunning = true;
        this.resetColor();

        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {           //using var i = 0 doesnt work for some reason...

            const allBars = document.getElementsByClassName('array-bar');

            if (i % 3 === 0) {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = COMPARISON_COLOUR;
                    secondBar.style.backgroundColor = COMPARISON_COLOUR;
                }, i * ANIMATION_SPEED_INSERTION_SORT);

            } else if (i % 3 === 1) {
                const [firstBarIdx,secondBarIdx] = animations[i];
                const firstBar = allBars[firstBarIdx];
                const secondBar = allBars[secondBarIdx];
                setTimeout(() => {
                    firstBar.style.backgroundColor = NORMAL_COLOUR;
                    secondBar.style.backgroundColor = NORMAL_COLOUR;
                }, i * ANIMATION_SPEED_INSERTION_SORT);

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
                    }
    //                console.log(isRunning);

                }, i * ANIMATION_SPEED_INSERTION_SORT);
            }


        }


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
    span.onclick = function() {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
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

     
        </div>
        <button
          id="info-button"
          className="info-button"
          onClick={() => this.openHelpMenu()}
        >
          {" "}
          ?{" "}
        </button>
   </div>


            <div className="container">
            <div className = "btn-group">
            <button onClick = {() => this.bubbleSort()}> Bubble Sort</button> 
            <button onClick = {() => this.selectionSort()}> Selection Sort</button> 
            <button onClick = {() => this.insertionSort()}> Insertion Sort</button> 
            <button onClick = {() => this.mergeSort()}> Merge Sort</button> 
            <button onClick = {() => this.heapSort()}> Heap Sort</button> 
            <button onClick = {() => this.quickSort()}> Quick Sort</button> 
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