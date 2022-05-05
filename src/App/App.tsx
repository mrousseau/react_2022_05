// import { MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react'
import FlexW from './components/layout/FlexW/FlexW';
import { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import { ConnectedMemThumbnail } from '../App/components/ui/MemeThunmbnail/MemeThunmbnail';
import MemeSVGViewer from './components/ui/connectedMemeViewer/connectedMemeViewer'
import NavBar from './components/ui/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'

// './components/ui/ConnectedMemeViewer/ConnectedMemeViewer'

const App=() => {
    return (
      <div className='App'>
        <NavBar />
        <Routes>
            <Route path="/" element={<div>Hello à tous</div>}/>
            <Route path="/edit" element={<MemeEDitor/>}/>
            <Route path="/thumbnail" element={<ConnectedMemThumbnail />}/>
        </Routes>
       
      </div>
    )
}

function MemeEDitor() {
  return (
    <FlexW>
        <MemeSVGViewer />
        <ConnectedMemeForm />
    </FlexW>
  )
}

export default App; 