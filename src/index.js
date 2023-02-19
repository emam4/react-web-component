import store from './redux/store/store';
import * as BUG_STATE from './constants/index';

store.dispatch({
    type: BUG_STATE.NEW,
    payload: {
      describtion: "New bug added",
    }
})

console.log(store.getState());