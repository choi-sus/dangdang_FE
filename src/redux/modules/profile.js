import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api} from "../../shared/Api"

const GET_PET = "GET_PET";

const getPet =  createAction(GET_PET,(pet) => ({pet}));

const initialState = {
    pet:""
}

const addPetDB = (formData) => {
    return async (dispatch, getState, { history }) => {
        await api.post(`/profiles`,formData)
        .then((res)=>{
            history.replace("/profile")
        })
        .catch((err)=>{
           window.alert(err.response.data.fail);  
        })
    }
}
const getPetDB = () => {
    return async (dispatch, getState, { history }) => {
        await api.get(`/profiles`)
        .then((res)=>{
            dispatch(getPet(res.data.userData))
        })
        .catch((err)=>{
           console.log(err) 
        })
    }
}

const editPetDB = (formData) => {
    return async (dispatch, getState, { history }) => {
        await api.patch(`/profiles`,formData)
        .then((res)=>{
            window.alert(res.data.success)
            history.replace("/profile")
        })
        .catch((err)=>{
            window.alert(err.response.data.fail);
        })
    }
}

export default handleActions ({
    [GET_PET]: (state,action) =>
    produce(state,(draft) => {
        draft.pet=action.payload.pet;
    }),
},
initialState
);

const actionCreators = {
    getPet,
    addPetDB,
    getPetDB,
    editPetDB,
}

export {actionCreators}