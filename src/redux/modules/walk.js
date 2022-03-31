import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api_token} from "../../shared/Api"

const END_WALK = "END_WALK";
const LOAD_WALKLIST = "LOAD_WALKLIST";
const LOAD_WALK = "LOAD_WALK";
const PAUSE_WALK = "PAUSE_WALK";


const endWalk = createAction(END_WALK,(endList)=> ({endList}));
const loadWalkList = createAction(LOAD_WALKLIST,(walks)=>({walks}));
const loadWalkOne = createAction(LOAD_WALK,(walk)=>({walk}));
const pauseWalk = createAction(PAUSE_WALK,(pauseWalk)=>({pauseWalk}));

const initialState = {
    endList:[],
    walkList:[],
    walk:"",
    pauseWalk:[],
}

const addWalkDB = (path, time, distance, water, yellow, brown, danger) => {
    return async (dispatch, getState, { history }) => {
       await api_token.post(`/maps/info`,
        {
            path: path,
            time: time,
            distance: distance,
            water: water,
            yellow: yellow,
            brown: brown,
            danger: danger
        })
         .then((res)=>{
            history.replace("/walkend");
         })
         .catch((err)=>{
            window.alert(err.response.data.fail);
            history.replace("/main");
         })
    }
 }

 const endWalkDB = () => {
    return async (dispatch, getState, { history }) => {
        await api_token.get(`/maps/endwalk`)
        .then((res) => {
            dispatch(endWalk(res.data))
          })
          .catch((err) => {
            console.error(err)
          })
    }
}

 const WalkListDB = () => {
    return async (dispatch, getState, { history }) => {
       await api_token.get(`/maps/info`)
         .then((res)=>{
             dispatch(loadWalkList(res.data.list));
         })
         .catch((err)=>{
            console.log(err) 
         })
    }
 }

 const WalkOneDB = (mapsId) => {
    return async (dispatch, getState, { history }) => {
       await api_token.get(`/maps/info/${mapsId}`)
         .then((res)=>{
             dispatch(loadWalkOne(res.data));
         })
         .catch((err)=>{
            console.log(err) 
         })
    }
 }
 
 const DelWalkDB = (mapsId) => {
    return async (dispatch, getState, { history }) => {
        await api_token.delete(`/maps/delete/${mapsId}`)
          .then((res)=>{
            window.alert(res.data.success);
            history.replace('/walklist');
          })
          .catch((err)=>{
            window.alert(err.response.data.fail); 
          })
     }
 }

export default handleActions ({
    [END_WALK]: (state, action) =>
    produce(state, (draft) => {
        draft.endList = action.payload.endList
    }),
    [LOAD_WALKLIST]: (state, action) =>
    produce(state, (draft) => {
        draft.walkList=action.payload.walks.reverse()
    }),
    [LOAD_WALK]: (state, action) =>
    produce(state, (draft) => {
        draft.walk=action.payload.walk
    }),
    [PAUSE_WALK]: (state, action) =>
    produce(state, (draft) => {
        draft.pauseWalk = action.payload.pauseWalk
    }),
},
initialState
);

const actionCreators = {
    endWalk,
    endWalkDB,
    addWalkDB,
    loadWalkList,
    WalkListDB,
    loadWalkOne,
    WalkOneDB,
    DelWalkDB,
    pauseWalk,
}

export {actionCreators}