import {usersAPI} from "../api";


const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USERS = 'SET_USERS';


let initialState = {
    items: [
        {id: 133, firstName: 'Bill'},
        {id: 101, firstName: 'Sue'},
        {id: 22, firstName: 'Ash'},
    ],
    isFetching: true
}

const tableReducer = (state = initialState, action) => {

    switch(action.type) {
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case SET_USERS: {
            return { ...state, items: action.items }
        }
        default:
            return state
    }
}

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const setUsers = (items) => ({type: SET_USERS, items })

export const requestUsers = () => {
    return  (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers()
         .then(response => {
                 dispatch(toggleIsFetching(false))
                 const items = response.data
                 dispatch(setUsers(items))
             })
    }
}


export default tableReducer