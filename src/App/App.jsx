import { MemeSVGThumbnail, MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react'
import FlexW from './components/layout/FlexW/FlexW';
import MemeForm from './components/ui/MemeForm/MemeForm';
// import Button from './components/ui/Buttons/Button'
import { ADDR_REST } from './config/config';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= { memes:[], images: []}
  }

  componentDidMount(){
    const memes = fetch(ADDR_REST+"/memes").then(flux=>flux.json());
    const images = fetch(ADDR_REST+"/images").then(flux=>flux.json());
    Promise.all([memes, images]).then(arr=>{
      this.setState({memes:arr[0], images:arr[1]})});

  }

  componentDidUpdate(oldProps, oldState)
  {
    console.log('component update ',oldState, this.state );
  }
  //attend que tout soit chargé


  render() {
    return (
      <div className='App'>
      {/* <Button></Button> */}
      <FlexW>
      {this.state.memes.length && <MemeSVGViewer meme={this.state.memes[0]} image={this.state.images.find(e=> e.id === this.state.memes[0].imageId)} />
      }
      <MemeForm images={this.state.images} />
      </FlexW>
        {JSON.stringify(this.state)}
      </div>
    )
  }
}

export default App; 