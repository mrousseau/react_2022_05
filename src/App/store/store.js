import { combineReducers, createStore } from "redux";
import { DummyMeme } from "../../interfaces/common";
import { ADDR_REST} from "../config/config";



const ressourcesInitialState = {
  images: [],
  memes: [],
};

export const ACTION_RESSOURCES = Object.freeze({
  ADD_ALL_RESSOURCES: "ADD_ALL_RESSOURCES",
  INIT_RESSOURCES: "INIT_RESSOURCES",
  ADD_MEME: "ADD_MEME",
});

function ressourcesReducer(state = ressourcesInitialState, action) {
    switch (action.type) { 
      case ACTION_RESSOURCES.ADD_MEME:
        return { ...state, memes: [...state.memes, action.value] };
      case ACTION_RESSOURCES.INIT_RESSOURCES:
        const memes = fetch(ADDR_REST + "/memes").then((flux) => flux.json());
        const img = fetch(ADDR_REST + "/images").then((flux) => flux.json());
        Promise.all([memes, img]).then((arr) => {
          store.dispatch({
            type: ACTION_RESSOURCES.ADD_ALL_RESSOURCES,
            values: arr,
          });
        });
        return state;
      case ACTION_RESSOURCES.ADD_ALL_RESSOURCES:
        return { ...state, memes: action.values[0], images: action.values[1] };
   
      default:
        return state;
    }
  }


  export const ACTION_CURRENT = Object.freeze({
    UPDATE_MEME: "UPDATE_MEME",
  });

  function currentReducer(state = DummyMeme, action) {
    switch (action.type) { 
      case ACTION_CURRENT.UPDATE_MEME:
        return { ...state, ...action.value };
      default:
        return state;
    }
  }
  
  const combinedReduc=combineReducers({current:currentReducer, ressources: ressourcesReducer})
  export const store = createStore(combinedReduc,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  store.dispatch({type: ACTION_RESSOURCES.INIT_RESSOURCES});




// import {createStore} from 'redux'
// import { ADDR_REST } from '../config/config';

// const ressourcesInitialState = {
//     images:[],
//     memes: [],
// }

// const ACTION_RESSOURCES = Object.freeze({
//     ADD_ALL_RESSOURCES:'ADD_ALL_RESSOURCES',
//     INIT_RESSOURCES:'INT_RESSOURCES',
//     ADD_MEME:'ADD_MEME'
// })

// /**
//  * reducer pour les ressources
//  * @param {object} state 
//  * @param {object} action 
//  */
// function ressourcesReducer(state=ressourcesInitialState, action) {
//     switch(action.type){
//         case ACTION_RESSOURCES.ADD_IMAGE : return {...state, memes:[...state.memes, action.value]};
//         case ACTION_RESSOURCES.INIT_RESSOURCES: 
//         const memes = fetch(ADDR_REST+"/memes").then(flux=>flux.json());
//         const images = fetch(ADDR_REST+"/images").then(flux=>flux.json());
//         Promise.all([memes, images]).then(arr=>{
//             store.dispatch({type:ACTION_RESSOURCES.ADD_ALL_RESSOURCES, values:arr})});
//         return state;

//         case ACTION_RESSOURCES.ADD_ALL_RESSOURCES: return {...state, memes:action.value[0],images:action.value[1]}
//         default: return state;
//     }
// }

// export const store=createStore(ressourcesReducer);
// store.dispatch({type:ACTION_RESSOURCES.INIT_RESSOURCES});
// // store.subscribe(()=>{
// //     console.log(store.getState())
// // })
// // store.dispatch({type:ACTION_RESSOURCES.ADD_MEME, value:{id:2, text:'nouveau meme'}})
// // store.dispatch({type:ACTION_RESSOURCES.ADD_MEME, value:{id:3, text:'noue'}})
// // store.dispatch({type:ACTION_RESSOURCES.ADD_MEME, value:{id:4, text:'titi'}})
// // store.dispatch({type:ACTION_RESSOURCES.ADD_MEME, value:{id:5, text:'toto'}})
// // store.dispatch({type:ACTION_RESSOURCES.ADD_MEME, value:{id:6, text:'meme'}})
// /*
// let state=ressourcesReducer(undefined, {type:'INIT'});
// console.log(state)
// state=ressourcesReducer(state, {type:ACTION_RESSOURCES.ADD_MEME, value:{id:2, text:'nouveau meme'}});
// console.log(state)
// state=ressourcesReducer(state, {type:ACTION_RESSOURCES.ADD_MEME, value:{id:1, text:'nouveau meme'}});
// console.log(state)
// */