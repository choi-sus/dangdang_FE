import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const SET_PATH = "SET_PATH";

const setPath = createAction(SET_PATH, (path)=> ({path}));

const initialState = {
    polylinePath: []
}

export default handleActions ({
    [SET_PATH]: (state, action) =>
    produce(state, (draft) => {
        draft.polylinePath.push(action.payload.path) 
    }),
},
initialState
);

const actionCreators = { 
    setPath
}

export {actionCreators}