import React from 'react'
// import Button from './components/ui/Buttons/Button'
import { ADDR_REST } from './config/config';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= { memes:[], images: []}
  }

  componentDidMount(){
    const memes = fetch(ADDR_REST+"/memes").then(flux=>{flux.json()}).then(arr=>this.setState({memes:arr}));
    const images = fetch(ADDR_REST+"/images").then(flux=>{flux.json()}).then(arr=>this.setState({images:arr}));
    Promise.all([memes, images]).then(arr=>this.setState({memes:arr[0], images:[1]}));
  }

  componentDidUpdate(oldProps, oldState)
  {
    console.log('component update ',oldState, this.state );
  }
  //attend que tout soit chargé


  render() {
    return (
      <div className='App'>
        {JSON.stringify(this.state)}
      </div>
    )
  }
}

export default App; 