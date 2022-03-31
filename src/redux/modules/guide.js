import { createAction, handleActions } from "redux-actions"
import { produce } from "immer"
import {api} from "../../shared/Api"

const GET_GUIDE = "GET_GUIDE"
const GET_GUIDEDETAIL = "GET_GUIDEDETAIL"

const getGuide = createAction(GET_GUIDE, (guideList) => ({guideList}))
const getGuideDetail = createAction(GET_GUIDEDETAIL, (guideDetail) => ({guideDetail}))

const initialState = {
    list: []
}

const guideDB = () => {
    return async (dispatch, getState, { history }) => {
        await api.get(`/guides`)
        .then((res) => {
            dispatch(getGuide(res.data)) 
          })
          .catch((err) => {
            console.error(err)
          })
    }
}

const guideDetailDB = (postNumber) => {
  return async (dispatch, getState, { history }) => {
      await api.get(`/guides/${postNumber}`)
      .then((res) => {
          dispatch(getGuideDetail(res.data))
        })
        .catch((err) => {
          console.error(err)
        })
  }
}

export default handleActions({
      [GET_GUIDE]: (state, action) => produce(state, (draft) => {
          draft.list = action.payload.guideList
        }),
      [GET_GUIDEDETAIL]: (state, action) => produce(state, (draft) => {
          draft.detail = action.payload.guideDetail
        }),
    },
    initialState
)


const actionCreators = {
    getGuide,
    guideDB,
    getGuideDetail,
    guideDetailDB
}

  export { actionCreators }