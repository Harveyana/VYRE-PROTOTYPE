

import { createContext, useContext,ReactNode,useReducer, Dispatch } from 'react';

import actionsReducer from '../hooks/ActionsReducer';
import type { allActions,dispatchActions } from "../components/dataTypes";


type State = {
  LocalAuthOperation:dispatchActions| any;
  user:any;
  wallets:any[]
}

// Define the type for the cart context
type ActionContextType = {
  state: (State| any)
  dispatch: Dispatch<dispatchActions>;
};

const ActionsContext = createContext<ActionContextType|undefined>(undefined);


export function ActionsProvider({ children }: { children: ReactNode }) {

  const initialState:State = {
    LocalAuthOperation:'',
    user:{},
    wallets:[]
  };

  const [state,dispatch] = useReducer<allActions|any|undefined>(actionsReducer,initialState);


  return (
    <ActionsContext.Provider value={{state,dispatch}}>
        {children}
    </ActionsContext.Provider>
  )
    

}


export function useActions() {
  const context = useContext(ActionsContext);
  if (!context) {
    throw new Error('useActions must be used within a actionsProvider');
  }
  return context;
}