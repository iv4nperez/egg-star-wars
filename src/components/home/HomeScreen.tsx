import clsx from 'clsx';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as ReactExcel } from '../../assets/file-xmark-solid.svg'
import { ReactComponent as ReactPlus } from '../../assets/file-plus-solid.svg'
import { ReactComponent as ReactMinus } from '../../assets/file-minus-solid.svg'
import { ReactComponent as ReactMoreInfo } from '../../assets/circle-plus-regular.svg'

import { StarButton } from '../core/StarButton'
import { StarAvatar } from '../core/StarAvatar'
import { imgURL } from '../../constants/constants'
import { setCharacterSelected, startGetcharacters } from '../../actions/homeAction'
import { Characters } from '../../interfaces/homeInterfaces'
import { getId } from '../../helpers/tools'
import { StoreHome } from '../../reducers/homeReducer';
import { StoreInterface } from '../../interfaces/storeInterface';

export const HomeScreen = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { characterList }: StoreHome = useSelector((state: StoreInterface) => state.home);



    useEffect(() => {
        dispatch(startGetcharacters())
    }, [])

    const handleSaveCharacterLocalStorage = (item: Characters) => {
        localStorage.setItem('starwars-character', JSON.stringify( item ))
    }

    const handleGoToDetail = (item: Characters) => {
        handleSaveCharacterLocalStorage( item ) 
        dispatch(setCharacterSelected(item))
        navigate("/detail")
    }

    const handleGoToTutorial = () => {
        navigate("/tutorial")
    }

    const imgHand = 'https://firebasestorage.googleapis.com/v0/b/baseapp-6f0e3.appspot.com/o/hand2.PNG?alt=media&token=a1fca4e9-fa50-42fe-97ca-4162eadb73db'

    return (
        <section className="px-[21px] pt-[17px] mx-auto md:max-w-screen-sm lg:max-w-screen-md">

            <header className=' bg-white sticky pt-5 top-0 pb-[1px]'>
                <div className=" flex items-center">
                    <img src={imgHand} alt="handImage" className="mr-[13px] w-8 h-[41px]" />
                    <h1 className="text-xl font-bold text-[#073045] font-publicSans">Example Title</h1>
                </div>

                <div className="flex justify-between pt-[13px] mb-[17px]">
                    <h2 className="text-xs font-bold font-publicSans">LEAD</h2>

                    <StarButton small>
                        Rounded Button
                    </StarButton>
                </div>

                <div className="flex justify-between mb-4 sm:w-[50%]  md:w-[50%]">

                    <StarButton large>
                        <ReactExcel className="w-4" />
                    </StarButton>

                    <StarButton large>
                        <ReactPlus className="w-4" />
                    </StarButton>

                    <StarButton large>
                        <ReactMinus className="w-4" />
                    </StarButton>
                </div>
            </header>

            <div>
                <ul className='px-2 mb-10'>
                    {
                        characterList.map((item: Characters, i: number) => (
                            <li className={clsx(
                                { 'star-home-list': true },
                                { 'border-b': i + 1 !== characterList.length }
                            )}
                                key={getId(item.url)}
                            >
                                <div className='flex items-center'>
                                    <StarAvatar small src={imgURL + getId(item.url) + '.jpg'} alt='1' />
                                    <p className='text-xs'>{item.name}</p>
                                </div>

                                <StarButton onClick={() => handleGoToDetail(item)} medium >
                                    <ReactMoreInfo className='w-[12.44px] mr-[5px]' /> <span className='text-[11px] font-bold'>Ver más</span>
                                </StarButton>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <footer className='flex justify-center items-center w-full mb-8'>
                <p className='text-[11px] font-semibold mr-4'>Lorem ipsum dolor sit amet</p>
                <p onClick={ handleGoToTutorial } className='text-[11px] font-semibold text-[#00AAFF] underline cursor-pointer'>Ver tutorial</p>
            </footer>
        </section>
    )
}
