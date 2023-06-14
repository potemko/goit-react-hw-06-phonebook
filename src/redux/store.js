import { applyMiddleware, combineReducers, createStore } from "redux";
import { myReducer } from "./myReducer";
import { contactSlise } from "./contactsSlise";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReduser = combineReducers({
  level: myReducer,
  good: contactSlise
})

const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))
export default store

