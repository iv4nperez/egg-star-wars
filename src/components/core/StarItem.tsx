import { StarDots } from "./StarDots"
import { StarIconsNavigation } from "./StarIconsNavigation"


interface Props {
    startwars: string,
    page: number,
    dots: number,
    title?: string,
    subtitle?: string,
    description?: string,
    children?: (JSX.Element | string | number) | (JSX.Element | string | number)[],
    width?: number | string,
    height?: number | string,
    showNavigation: boolean,
    onClickArrowLetf?: React.MouseEventHandler<HTMLButtonElement>,
    showArrowLeft?: boolean
}


export const StarItem = ({ startwars, page, dots, title, subtitle, description, children, width, height, showNavigation, onClickArrowLetf, showArrowLeft }: Props) => {
    return (
        <div className="w-full h-full flex justify-center items-center px-[30px]">
            <div className="flex flex-col justify-center items-center">
                {
                    showNavigation
                        ? (
                            <div className="w-full absolute top-6 px-10 md:px-16 mx-auto md:max-w-screen-sm lg:max-w-screen-md">
                                <StarIconsNavigation showArrowLeft={ showArrowLeft } onClickArrowLetf={ onClickArrowLetf } />
                            </div>
                        )
                        : null
                }

                <div className='sm-h:hidden h-[288px] w-full flex justify-center items-center'>
                    <img  style={{ width, height }} className='' src={startwars} alt="" />
                </div>

                <div className='w-full h-52 flex flex-col items-center justify-center'>

                    <h2 className='text-[10px] text-white mb-[11px]'>{title}</h2>
                    <p className='text-[#073045] text-lg font-bold mb-[19px]'>{subtitle}</p>
                    <p className='w-[290px] text-center leading-[22px] text-sm mb-[37px]'>{description}</p>

                </div>
                {children}
                <StarDots dots={dots} dotActive={page} />
            </div>
        </div>
    )
}
