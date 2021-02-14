import {LOAD_LOCAL_STORAGE} from './localStorageTypes';

export const saveToLocalStorage=(state)=> {
    try {
      
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("persistantState", serialisedState);

    } catch (e) {
      console.log(e);
    }
  }
  
  
  export const loadFromLocalStorage=(store)=> {
      const serialisedState = localStorage.getItem("persistantState");
      if (serialisedState !== null && serialisedState !== undefined){ 
      store.dispatch(loadLocalStorage(JSON.parse(serialisedState)))
      }

  }




export const loadLocalStorage=data=>{
    return {
        type: LOAD_LOCAL_STORAGE,
        payload: data
      }
}

