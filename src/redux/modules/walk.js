import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api_token} from "../../shared/Api"

const END_WALK = "END_WALK";
const GET_TIME = "GET_TIME";
const LOAD_WALKLIST = "LOAD_WALKLIST";
const LOAD_WALK = "LOAD_WALK";


const endWalk = createAction(END_WALK,(endList)=> ({endList}));
const getRcdTime = createAction(GET_TIME,(time)=> ({time}));
const loadWalkList = createAction(LOAD_WALKLIST,(walks)=>({walks}))
const loadWalkOne = createAction(LOAD_WALK,(walk)=>({walk}))

const initialState = {
    endList:[],
    walkList:[],
    walk:"",
    time:"",
    petImage:"",
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
            window.alert(res.data.success)
            history.replace("/walkend");
         })
         .catch((err)=>{
            console.log(err) 
         })
    }
 }

 const endWalkDB = () => {
    return async (dispatch, getState, { history }) => {
        await api_token.get(`/maps/endwalk`)
        .then((res) => {
            console.log(res.data)
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

export default handleActions ({
    [END_WALK]: (state, action) =>
    produce(state, (draft) => {
        draft.endList = action.payload.endList
    }),
    [GET_TIME]: (state, action) =>
    produce(state, (draft) => {
        draft.time = action.payload.time
    }),
    [LOAD_WALKLIST]: (state, action) =>
    produce(state, (draft) => {
        draft.walkList=action.payload.walks.reverse()
    }),
    [LOAD_WALK]: (state, action) =>
    produce(state, (draft) => {
        draft.walk=action.payload.walk
    }),
},
initialState
);

const actionCreators = {
    endWalk,
    endWalkDB,
    addWalkDB,
    getRcdTime,
    loadWalkList,
    WalkListDB,
    loadWalkOne,
    WalkOneDB,
}

export {actionCreators}