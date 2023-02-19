import store from './store/store';
import updateBugsReducer from './reducer/updatingBug';
import * as BUG_STATE from '../constants/index';

// store.dispatch({
//     type: BUG_STATE.NEW,
//     payload: {
//         description: "New bug added"
//     }
// })

console.log(store.getState());