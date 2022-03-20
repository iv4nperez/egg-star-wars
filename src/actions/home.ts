import axios from "axios"
import { ListCharacters, Result, ResultElement } from "../interfaces/homeInterfaces"
import { types } from "../types/types"


export const startGetcharacters = () => {
    return async ( dispatch: any ) => {
        let { data }: Result = await axios.get('https://swapi.dev/api/people')

        let listPeople: ListCharacters[] = data.results.map(( item ) => ({
            name: item.name,
            url: item.url
        }))

        dispatch( setListCharacter(listPeople) );
    }
}





export const setListCharacter = (payload: ListCharacters[]) => ({
    type: types.GET_LIST_HOME,
    payload: payload
})
