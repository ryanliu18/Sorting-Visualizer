import React from 'react';
import './SortingVisualizer.css';
import {getMergeSortAnimations} from '../SortingAlgorithms/mergeSort';

const ANIMATION_SPEED  = 1; //smaller the speed the faster

const NUM_OF_BARS = 300;

const LOWER_BOUND_SIZE = 10;

const UPPER_BOUND_SIZE = 800;

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
        this.resetArray();

    }

    resetArray() {
        if (isRunning) return;
        const array = [];
        array.push(UPPER_BOUND_SIZE); //so we guarantee same height of allBars each time :)
        for (let i =0; i< NUM_OF_BARS-1; i++) {
            array.push(this.getRandomInt(LOWER_BOUND_SIZE,UPPER_BOUND_SIZE));
        }
        this.setState({array});
    }

    bubbleSort() {

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
                    if (i == animations.length -1) isRunning = false;
                    console.log(isRunning);

                }, i * ANIMATION_SPEED);
            }

            //if (i === animations.length -1) { 
            //    isRunning = false;
            //}


        }

    }

    heapSort() {

    }

    quickSort() {

    }

    selectionSort() {

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
            <button onClick = {() => this.resetArray()}> Generate New Random Array</button>
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
 

}