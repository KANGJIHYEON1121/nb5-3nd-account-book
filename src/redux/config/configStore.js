// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
// import expense from '../modules/expense';

import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from '../slices/expenseSlice';

// // 1) rootReducer 만들기
// const rootReducer = combineReducers({
//   expense,
// });

// // 2) store 생성
// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {
    expense: expenseSlice,
  },
});

// 3) 만든 store 내보내기
export default store;
