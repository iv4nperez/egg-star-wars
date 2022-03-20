import axios from "axios"
import { Characters, Result, ResultElement } from "../interfaces/homeInterfaces"
import { types } from "../types/types"


export const startGetcharacters = () => {
    return async ( dispatch: any ) => {
        let { data }: Result = await axios.get('https://swapi.dev/api/people')

        let listPeople: Characters[] = data.results.map(( item ) => ({
            name: item.name,
            url: item.url,
            height: item.height,
            mass: item.mass,
            hair_color: item.hair_color,
            eye_color: item.eye_color,
            birth_year: item.birth_year,
            gender: item.gender
        }))

        dispatch( setListCharacter(listPeople) );
    }
}





export const setListCharacter = (payload: Characters[]) => ({
    type: types.GET_LIST_HOME,
    payload: payload
})


export const setCharacterSelected = (payload: Characters ) => ({
    type: types.SET_CHARACTER_SELECTED,
    payload: payload
})