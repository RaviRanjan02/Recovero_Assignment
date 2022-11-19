import { applyMiddleware, legacy_createStore, combineReducers, compose } from "redux";

import { reducer  as WritterReducer} from "./Writer/reducer";

import { reducer as AdminReducer}  from "./Admin/reducer"

import {reducer as AuthReducer} from "./WriterAuth/reducer"


 import thunk from "redux-thunk";


const rootstore = {WritterReducer, AdminReducer, AuthReducer}; 




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = legacy_createStore(combineReducers(rootstore), composeEnhancer( applyMiddleware(thunk)));

export { store };