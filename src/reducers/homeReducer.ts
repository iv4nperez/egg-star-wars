import { types } from "../types/types";


const initialState = {
    characterList: []
}


export const homeReducer = ( state = initialState, action: any ) => {

    switch ( action.type ) {
        case types.GET_LIST_HOME:
            return {
                ...state,
                characterList: action.payload
            }

        default:
            return state;
    }

}