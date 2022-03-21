import clsx from 'clsx'
import { useState } from 'react'
import { StarItemSlider } from './StarItemSlider'


import startwars from '../../assets/starwars_PNG23.png'
import startwars_2 from '../../assets/starwars_PNG33.png'
import startwars_3 from '../../assets/starwars_PNG19.png'

import { StarItem } from './StarItem'
import { useNavigate } from 'react-router-dom'

export const StarSlider = () => {
  let navigate = useNavigate();
  const [page, setPage] = useState(1)

  const handleNextSection = () => {
    if(page === 3) {
      navigate('/')
    } else {
      setPage( page + 1 )
    }
  }


  const handleGoBack = () => {
    if(page > 1){
      setPage( page - 1 )
    }
  }


  return (
    <div className='overflow-hidden'>
      <div className={ clsx(
        { 'star-slider-container': true },
        { 'star-Slider-Page-1': page === 1  },
        { 'star-Slider-Page-2': page === 2  },
        { 'star-Slider-Page-3': page === 3  },
      )}>
        <StarItemSlider
          background='gray'
        >
          <StarItem
            showNavigation={ false }
            dots={ 3 }
            width={ 312 }
            height={ 204 }
            page={ page }
            startwars={ startwars }
            title={ 'LEAD' }
            subtitle={ 'I’m a text' }
            description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.' }
          >

            <button onClick={ () => handleNextSection() } className='uppercase border-white  w-full h-[40px] rounded-lg border-2 text-white text-[11px] mb-[22px]'>descubrir</button>

          </StarItem>
        </StarItemSlider>
        <StarItemSlider background='white'>


        <StarItem
            showArrowLeft={ true }
            onClickArrowLetf={ handleGoBack }
            showNavigation={ true }
            dots={ 3 }
            width={ 216 }
            height={ 288 }
            page={ page }
            startwars={ startwars_2 }
            title={ '' }
            subtitle={ 'I’m another text' }
            description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.' }
          >

              <button onClick={ () => handleNextSection() } className='uppercase   w-full h-[40px] rounded-lg border-2 text-[#073045] shadow-sm font-bold text-[11px] mb-[22px]'>SIGUIENTE</button>
          </StarItem>
        </StarItemSlider>

        <StarItemSlider background='white'>

        <StarItem
            showArrowLeft={ true }
            onClickArrowLetf={ handleGoBack }
            showNavigation={ true }
            dots={ 3 }
            width={ 230 }
            height={ 221 }
            page={ page }
            startwars={ startwars_3 }
            title={ '' }
            subtitle={ 'I’m another text' }
            description={ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus nibh velit, nec varius diam semper eget.' }
          >
            <button onClick={ () => handleNextSection() } className='uppercase w-full h-[40px] rounded-lg border-2 text-[#073045] shadow-sm font-bold text-[11px] mb-[22px]'>finalizar</button>
          </StarItem>
        </StarItemSlider>
      </div>
    </div>
  )
}
