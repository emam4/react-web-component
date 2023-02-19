import { configureStore } from '@reduxjs/toolkit';
import updateBugsReducer from '../reducer/updatingBug';

const store = configureStore({ reducer: updateBugsReducer })

export default store;