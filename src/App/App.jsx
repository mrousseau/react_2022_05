import React from 'react'
import Button from './components/ui/Buttons/Button'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={count:1, title:"title de l'app"}
  }
  

  componentDidUpdate(oldProps, oldState)
  {
    console.log('component update ',oldState, this.state );
  }

  render() {
    return (
      <div className='App'>
        Valeur de count : {this.state.count}
        <hr/>
        <Button onButtonClicked={()=>{
          this.setState({count:this.state.count+1})
          this.count++;
          console.log(this.state.count);
        }} bgColor='blue'>ajouter +1</Button>
        <Button onButtonClicked={()=>{
          this.setState({count:this.state.count-1})
          console.log(this.state.count);
        }} bgColor='tomato'>retirer -1</Button>
      </div>
    )
  }
}

export default App; 