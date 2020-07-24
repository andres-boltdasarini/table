import {usersAPI} from "../api";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [ ],
    isFetching: true
}

const tableReducer = (state = initialState, action) => {

    switch(action.type) {
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        default:
            return state
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const setUsers = (users) => ({type: SET_USERS, users })

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))

        const data = await usersAPI.getUsers()

        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))

    }
}


export default tableReducer