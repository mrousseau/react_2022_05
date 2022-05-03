import React from 'react';
import './App.css';
import Button from './components/ui/Buttons/Button'


function App() {
  return (
    <div className="App">
      <Button toto="un text du button"></Button>
      <Button>du text children</Button>
      <Button>
        <div>du text children node </div>
      </Button>
      <Button>
        <div>du text children node 1</div>
        <div>du text children node 2</div>
      </Button>
    </div>
  );
}
export default App;