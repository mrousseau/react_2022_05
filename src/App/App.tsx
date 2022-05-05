// import { MemeSVGViewer } from 'orsys-tjs-meme';
import React, { useEffect } from 'react'
import FlexW from './components/layout/FlexW/FlexW';
import { ConnectedMemeForm } from './components/ui/MemeForm/MemeForm';
import { ConnectedMemThumbnail } from '../App/components/ui/MemeThunmbnail/MemeThunmbnail';
import MemeSVGViewer from './components/ui/connectedMemeViewer/connectedMemeViewer'
import NavBar from './components/ui/NavBar/NavBar';
import { Route, Routes,useParams  } from 'react-router-dom'
import { ACTION_CURRENT} from './store/store';
import { PDFConnectedMemeThumbnail } from "./components/pdf/PDFThumbnail/PDFThumbnail";
import { connect } from 'react-redux';
import { IMeme } from '../interfaces/common';
// import { PDFMemeThumbnail } from './components/pdf/PDFThumbnail/PDFThumbnail';

// './components/ui/ConnectedMemeViewer/ConnectedMemeViewer'

const App=() => {
    return (
      <div className='App'>
        <NavBar />
        <Routes>
            <Route path="/" element={<div>Hello à tous</div>}/>
            <Route path="/edit" element={<MemeEditor/>}/>
            <Route path="/edit/:id" element={<MemeEditor/>}/>
            <Route path="/thumbnail" element={<ConnectedMemThumbnail />}/>
            <Route path="/PDFthumbnail" element={<PDFConnectedMemeThumbnail/>} />
        </Routes>
       
      </div>
    )
}

function mstp(s, o) {
  return { memes: s.ressources.memes };
}
function mdtp(d: Function) {
  return {
    select: (meme?: IMeme) => {
      if (undefined !== meme) {
        d({ type: ACTION_CURRENT.UPDATE_MEME, value: meme });
      } else {
        d({ type: ACTION_CURRENT.CLEAR_CURRENT });
      }
    },
  };
}

const MemeEditor = connect(
  mstp,
  mdtp
)(function (props: { memes: Array<IMeme>; select: Function }) {
  const id = useParams().id;
  useEffect(() => {
    props.select(props.memes.find((m) => m.id === Number(id)));
  }, [props.memes, id]);
  return (
    <FlexW>
      <MemeSVGViewer />
      <ConnectedMemeForm />
    </FlexW>
  );

})

export default App; 
