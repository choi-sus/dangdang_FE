import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {api, api_token} from "../../shared/Api"
import {getCookie } from "../../shared/Cookie";

const ADD_WALK = "ADD_WALK";

const addWalk = createAction(ADD_WALK,(walk)=> ({walk}));

const initialState = {
    walkList:[]
}
const addWalkDB = (path,time,distance) => {
    return async (dispatch, getState, { history }) => {
        await api.post(`/api/maps/info`,
        {
            path:path,
            time:time,
            distance:distance,
            headers : {authorization : `Bearer ${getCookie('token')}` }
        })
         .then((res)=>{
             window.alert(res.data.success)
             dispatch(addWalk());
         })
         .catch((err)=>{
            console.log(err) 
         })
    }
 }

export default handleActions ({
    [ADD_WALK]: (state, action) =>
    produce(state, (draft) => {
        draft.walkList.push(action.payload.walk)
    }),
},
initialState
);

const actionCreators = {
    addWalk,
    addWalkDB,
}

export {actionCreators}