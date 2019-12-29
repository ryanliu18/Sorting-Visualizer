import React from 'react';
import './SortingVisualizer.css';
import {mergeSort} from '../SortingAlgorithms/mergeSort';


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
        const array = [];
        for (let i =0; i< 300; i++) {
            array.push(this.getRandomInt(10,800));
        }
        this.setState({array});
    }

    bubbleSort() {

    }

    mergeSort() {

        const animations = mergeSort(this.state.array);
        for (var i = 0; i < animations.length; i++) {
            const {comparison} = animations[i];
            setTimeout(() => {
                const allBars = document.getElementsByClassName('array-bar'); //get element by classname?
                allBars[comparison[0]].style.backgroundColor = 'red';
                allBars[comparison[1]].style.backgroundColor =  'red';
                setTimeout(() => {
                    allBars[comparison[0]].style.backgroundColor = 'turquoise';
                    allBars[comparison[1]].style.backgroundColor = 'turquoise';
                }, (i+1) * 10);
            }, i * 10);
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