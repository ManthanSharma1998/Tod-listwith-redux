import { createStore } from 'redux'
import rootreducers from './redux/reducers'

const store=createStore(rootreducers);
export default store;