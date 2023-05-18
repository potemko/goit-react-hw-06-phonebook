import { combineReducers, createStore } from "redux";
import { myReducer } from "./myReducer";
import { contactSlise } from "./contactsSlise";

const rootReduser = combineReducers({
  level: myReducer,
  good: contactSlise
})

const store = createStore(rootReduser)
export default store

