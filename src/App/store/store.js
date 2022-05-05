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
  ADD_SAVE_MEME: "ADD_SAVE_MEME",
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
    CLEAR_CURRENT:"CLEAR_CURRENT",
    SAVE_MEME:"SAVE_MEME"
  });

  function currentReducer(state = DummyMeme, action) {
    switch (action.type) { 
      case ACTION_CURRENT.UPDATE_MEME:
        return { ...state, ...action.value };
      case ACTION_CURRENT.CLEAR_CURRENT:
      case ACTION_RESSOURCES.ADD_SAVE_MEME:
        return { ...DummyMeme }; 
      case ACTION_CURRENT.SAVE_MEME:
        fetch(`${ADDR_REST} + /memes${undefined!==state.id? '/' + state.id: ""}`,
        {
          method: `${undefined !== state.id ? "PUT" : "POST"}`,
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(state),
        }
        ).then((flux) => flux.json()
        ).then(o=>{
          store.dispatch({type: ACTION_RESSOURCES.ADD_SAVE_MEME, value: o })
        });
      default:
        return state;
    }
  }
  
  const combinedReduc=combineReducers({current:currentReducer, ressources: ressourcesReducer})
  export const store = createStore(combinedReduc,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  store.dispatch({type: ACTION_RESSOURCES.INIT_RESSOURCES});
