// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filterReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';

//=============== Before ========================
// import { tasksReducer, filtersReducer } from "./reducer";
//=============== After ========================
// import { contactsReducer, filterReducer } from './reducer';
import { contactsReducer } from './contactsSlice';
import { changeFilter } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: changeFilter,
  },
});
