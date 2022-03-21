import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCharacterSelected } from "../../actions/homeAction";

import { imgURL } from "../../constants/constants";
import { getId } from "../../helpers/tools";
import { Characters } from "../../interfaces/homeInterfaces";
import { StarAvatar } from "../core/StarAvatar"
import { StarBox } from "../core/StarBox";

import { StarIconsNavigation } from "../core/StarIconsNavigation";

export const DetailScreen = () => {
  const dispatch = useDispatch();
  const { characterSelected } : { characterSelected: Characters } = useSelector( (state: any) => state.home );


  

  const handleRecoverChartacter = () => {
    let character: Characters = JSON.parse( localStorage.getItem('starwars-character') || '' )
    if( character ){
      dispatch( setCharacterSelected( character ) )
    }
  }


  useEffect(() => {
    handleRecoverChartacter()
  }, [])

  return (
    <div>
      {
        characterSelected
          ?
          (
            <section className="start-detail-container">
              <StarIconsNavigation showArrowLeft={ false } />


              <div className="flex items-center gap-4 mb-10">
                <StarAvatar  medium src={ imgURL + getId(characterSelected.url) + '.jpg'  } alt="luck" />
                <span className="text-xl font-semibold">{ characterSelected.name }</span>
              </div>


              <ul className="flex justify-between  flex-wrap">
                <StarBox itemKey={ 'Birth Year' } valueKey={ characterSelected.birth_year } />
                <StarBox itemKey={ 'Height' } valueKey={ characterSelected.height } />
                <StarBox itemKey={ 'Mass' } valueKey={ characterSelected.mass } />
                <StarBox itemKey={ 'Hair Color' } valueKey={ characterSelected.hair_color } />
                <StarBox itemKey={ 'Gender' } valueKey={ characterSelected.gender } />
                <StarBox itemKey={ 'Eye Color' } valueKey={ characterSelected.eye_color } />
              </ul>

            </section>
          ) : <p>loading</p>
    }
    </div>
    
  )
}
