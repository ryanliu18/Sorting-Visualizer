import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer'
import './App.css';

function App() {
  document.title = 'Sorting';
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
