import { createReducer, on } from '@ngrx/store';
import { addData, addDataFailure, loadData, loadDataFailure, loadDataSuccess } from './people.actions';
import { AppState } from '../app.state';

export const initialState: AppState = {
    people:[],
  };

  export const peopleReducer = createReducer(
    initialState,
    on(loadData, (state: any) => {
      console.log("Load data reducer here");
      return {
        ...state,
        loading: true
      };
    }),
    on(loadDataSuccess, (state: any, { payload}: any) => {
      console.log("Load data success reducer here",payload);
      return {
        ...state,
        loading: false,
        people: payload
      };
    }),
    on(loadDataFailure, (state: any, { payload }: any) => {
      console.log("Load data failure reducer here");
      return {
        ...state,
        loading: false,
        error: payload
      };
    }),

    on(addData,(state:any,{payload}:any)=>{
      console.log("Add Data")
      return{
        ...state,
        loading:false,
      }
    }),
    on(addDataFailure, (state: any, { payload }: any) => {
      console.log("Load data failure reducer here");
      return {
        ...state,
        loading: false,
        error: payload
      };
    }),
  
  );