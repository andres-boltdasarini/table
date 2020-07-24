import {usersAPI} from "../api";
import {AxiosInstance as axios} from "axios";

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_USERS = 'SET_USERS';


let initialState = {
    items: [ ],
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

         axios.get("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
             .then(response => {
                 dispatch(toggleIsFetching(false))
                 const items = response.data
                 dispatch(setUsers(items))
             })
    }
}


export default tableReducer