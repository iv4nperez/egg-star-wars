import { useSelector } from "react-redux";
import { imgURL } from "../../constants/constants";
import { getId } from "../../helpers/tools";
import { Characters } from "../../interfaces/homeInterfaces";
import { StarAvatar } from "../core/StarAvatar"
import { StarBox } from "../core/StarBox";

export const DetailScreen = () => {

  const { characterSelected } : { characterSelected: Characters } = useSelector( (state: any) => state.home );

  return (
    <section className="px-[21px] pt-[17px] mx-auto md:max-w-screen-sm lg:max-w-screen-md mt-5">
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
  )
}
