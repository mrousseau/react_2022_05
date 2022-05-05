// import { MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react'
import FlexW from './components/layout/FlexW/FlexW';
import { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import { ConnectedMemThumbnail } from '../App/components/ui/MemeThunmbnail/MemeThunmbnail';
import MemeSVGViewer from './components/ui/connectedMemeViewer/connectedMemeViewer'
import NavBar from './components/ui/NavBar/NavBar';
// './components/ui/ConnectedMemeViewer/ConnectedMemeViewer'

const App=() => {
    return (
      <div className='App'>
        <ConnectedMemThumbnail />
        <NavBar />
        <FlexW>
        <MemeSVGViewer />
        <ConnectedMemeForm />
        </FlexW>
      </div>
    )
}


export default App; 