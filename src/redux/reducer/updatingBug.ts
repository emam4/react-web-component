import * as BUG_STATE from '../../constants/index';

export default function updateBugsReducer(state: any[]= [], action: any) {    
    switch (action.type) {
        case BUG_STATE.NEW:
            return [
                ...state,
                {
                    id:Math.random()*159753,
                    describtion:action.payload.describtion,
                }
            ]
        case BUG_STATE.DUPLICATE:
            return [
                state
            ]
        default:
            return state;
    }
}