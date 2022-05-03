import React from 'react';
import './App.css';
import Button from './components/ui/Buttons/Button'


function App() {
  return (
    <div className="App">
      {/* <Button text="un text du button"></Button> */}
      <Button>
        <div>du text children</div>
      </Button>
      <Button>
        <div>du text children1</div>
        <div>du text children2</div>
      </Button>
    </div>
  );
}
export default App;