import { ThreadModel } from "../../models/threadModel"
import { ThreadsData } from "../../models/threadsData"
import * as actionTypes from "../actionTypes";


const initialState = {
  lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'bg',
  threadsData: new ThreadsData(),
  thread: new ThreadModel(),
  //
  indexCounter: -2,
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.THREADSDATA:
      return {
        ...state,
        threadsData: action.payload
      }
    case actionTypes.THREAD:
      return {
        ...state,
        thread: action.payload
      }
   
  }
  return state;
}

export default commonReducer;
