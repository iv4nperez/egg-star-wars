import { Characters } from "../interfaces/homeInterfaces";
import { types } from "../types/types";


const initialState = {
    characterList: [],
    characterSelected: {}
}

export interface StoreHome {
    characterList: Characters [],
    characterSelected: Characters
}

interface Action {
    type: string,
    payload: Characters | Characters[]
}

export const homeReducer = ( state = initialState, action: Action )  => {

    switch ( action.type ) {
        case types.GET_LIST_HOME:
            return {
                ...state,
                characterList: action.payload
            }
        case types.SET_CHARACTER_SELECTED:
            return {
                ...state,
                characterSelected: action.payload
            }

        default:
            return state;
    }

}