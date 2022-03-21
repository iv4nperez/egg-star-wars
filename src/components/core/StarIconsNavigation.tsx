
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ReactArrowLeft } from '../../assets/chevron-left-solid.svg'
import { ReactComponent as ReactClose  } from '../../assets/xmark-solid.svg'

interface Props {
  onClickArrowLetf?: React.MouseEventHandler<HTMLButtonElement>,
  showArrowLeft?: boolean
}


export const StarIconsNavigation = ({ onClickArrowLetf, showArrowLeft }: Props) => {
  let navigate = useNavigate();

  const handleGoTo = ( route:string ) => {
    navigate( route )
  }


  return (
    <nav className="flex justify-between pb-8">

      {
        showArrowLeft
          ?
            (
              <button onClick={ onClickArrowLetf }>
                <ReactArrowLeft className="goBackArrow w-4" />
              </button>
            )
          : <div></div>
      }
        <button onClick={ () => handleGoTo( '/' ) } >
          <ReactClose className="w-4" />
        </button>

    </nav>
  )
}
