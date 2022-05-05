// import { MemeSVGViewer } from 'orsys-tjs-meme';
import React from 'react'
import FlexW from './components/layout/FlexW/FlexW';
import { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import { ConnectedMemThumbnail } from '../App/components/ui/MemeThunmbnail/MemeThunmbnail';
import MemeSVGViewer from './components/ui/connectedMemeViewer/connectedMemeViewer'
import NavBar from './components/ui/NavBar/NavBar';
import { Route, Routes } from 'react-router-dom'
import { ACTION_CURRENT, store } from './store/store';
import { PDFConnectedMemeThumbnail } from "./components/pdf/PDFThumbnail/PDFThumbnail";
// import { PDFMemeThumbnail } from './components/pdf/PDFThumbnail/PDFThumbnail';

// './components/ui/ConnectedMemeViewer/ConnectedMemeViewer'

const App=() => {
    return (
      <div className='App'>
        <NavBar />
        <Routes>
            <Route path="/" element={<div>Hello à tous</div>}/>
            <Route path="/edit" element={<MemeEDitor/>}/>
            <Route path="/edit/:id" element={<MemeEDitor/>}/>
            <Route path="/thumbnail" element={<ConnectedMemThumbnail />}/>
            <Route path="/PDFthumbnail" element={<PDFConnectedMemeThumbnail/>} />
        </Routes>
       
      </div>
    )
}

function MemeEDitor() {
  // const id=useParams().id;

  // useEffect(() => {
  //   return () => {
  //     store.dispatch({type: ACTION_CURRENT.UPDATE_MEME, value:store.getState().ressources.meme.find(e=> e.id===Number(id))})
  //   };
  // },[id,store.getState()])
  
  return (
    <FlexW>
        <MemeSVGViewer />
        <ConnectedMemeForm />
    </FlexW>
  )
}

export default App; 
