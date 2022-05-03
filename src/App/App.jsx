import React from 'react';
import './App.css';
import Button from './components/ui/Buttons/Button'


function App() {
  return (
    <div className="App">
      <Button toto="un text du button" bgColor='red'></Button>
      <Button color='orange'>du text children</Button>
      <Button color='black'>
        <div>du text children node </div>
      </Button>
      <Button bgColor='blue' style={{textDecoration: 'underline', fontWeight:900, fontStyle: 'Arial'}}>
        <div>du text children node 1</div>
        <div>du text children node 2</div>
      </Button>
    </div>
  );
}
export default App;