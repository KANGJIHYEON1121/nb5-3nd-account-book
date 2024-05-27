import { createStore } from 'redux';
import { combineReducers } from 'redux';

// 1) rootReducer 만들기
const rootReducer = combineReducers({});

// 2) store 생성
const store = createStore(rootReducer);

// 3) 만든 store 내보내기
export default store;
