import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/mergeSort';
import {getBubbleSortAnimations} from '../SortingAlgorithms/bubbleSort';
import {getSelectionSortAnimations} from '../SortingAlgorithms/selectionSort'

const ANIMATION_SPEED_MERGE_SORT  = 2; //smaller the speed value, the faster the sort

const ANIMATION_SPEED_BUBBLE_SORT = 0.4;

const ANIMATION_SPEED_SELECTION_SORT = 1;

const NUM_OF_BARS = 100;

const SCALING_FACTOR = 4;

const NORMAL_COLOUR = 'turquoise';

const COMPARISON_COLOUR = 'red';

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
        this.shuffle(array);
        this.setState({array});
    }

    bubbleSort() {

        if (isRunning) return;
        isRunning = true;

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
                    if (i === animations.length -1) isRunning = false;
//                    console.log(isRunning);

                }, i * ANIMATION_SPEED_BUBBLE_SORT);
            } else {
                setTimeout(() => {
                if (i === animations.length -1) isRunning = false;
//                console.log(isRunning);
                }, i*ANIMATION_SPEED_BUBBLE_SORT);
            }
        }


        }

    }

    mergeSort() {
        if (isRunning) return;
        isRunning = true;


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
                    if (i == animations.length -1) isRunning = false;
    //                console.log(isRunning);

                }, i * ANIMATION_SPEED_MERGE_SORT);
            }


        }

    }

    heapSort() {

    }

    quickSort() {

    }

    selectionSort() {
        if (isRunning) return;
        isRunning = true;

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
                        if (i == animations.length -1) isRunning = false;
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

                    if (i == animations.length -1) isRunning = false;
    //               console.log(isRunning);

                }, i * ANIMATION_SPEED_SELECTION_SORT);


        }


        }



    }

    insertionSort() {

    }

    render() {
        const{array} = this.state;

        return (
            <div className="array-container">
            {array.map((value,idx) => (
                <div className = "array-bar" key = {idx} style = {{height: `${value}px`}}>
                </div>
            ))}
            <button onClick = {() => this.resetArray()}> Scramble</button>
            <button onClick = {() => this.bubbleSort()}> Bubble Sort</button> 
            <button onClick = {() => this.mergeSort()}> Merge Sort</button> 
            <button onClick = {() => this.heapSort()}> Heap Sort</button> 
            <button onClick = {() => this.quickSort()}> Quick Sort</button> 
            <button onClick = {() => this.selectionSort()}> Selection Sort</button> 
            <button onClick = {() => this.insertionSort()}> Insertion Sort</button> 

            
        </div>
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