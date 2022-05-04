import { MemeSVGViewer } from 'orsys-tjs-meme';
import { DummyMeme, IImage, IMeme } from '../interfaces/common';
import React from 'react'
import FlexW from './components/layout/FlexW/FlexW';
import MemeForm from './components/ui/MemeForm/MemeForm';
// import Button from './components/ui/Buttons/Button'
import { ADDR_REST } from './config/config';
import MemeThumbnail from '../App/components/ui/MemeThunmbnail/MemeThunmbnail';
import {store} from './store/store';

interface IAppSate{
  memes:Array<IMeme>,
  images:Array<IImage>,
  current:IMeme
}

interface IappProps{}

class App extends React.Component<IappProps,IAppSate> {
  constructor(props) {
    super(props);
    this.state = { memes:[], images: [], current:DummyMeme}
  }

  componentDidMount(){
    console.log('store:',store.getState());
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
      <MemeThumbnail memes={this.state.memes} images={this.state.images}/>
      <FlexW>
      {this.state.memes.length && <MemeSVGViewer meme={this.state.current} image={this.state.images.find(e=> e.id === this.state.current.imageId)} />
      }
      <MemeForm 
      images={this.state.images} 
      meme={this.state.current} 
      onFormChange={(objt: object) =>{
        this.setState({current: {...this.state.current, ...objt}})
      }} 
      />
      </FlexW>
        {/* {JSON.stringify(this.state)} */}
      </div>
    )
  }
}

export default App; 