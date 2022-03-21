import clsx from "clsx"

interface Props {
    dots: number,
    dotActive: number
}

export const StarDots = ({ dots = 3, dotActive }: Props) => {

    const handlePaintDots = () => {
        let elements = []
        for (let i = 1; i <= dots; i++) {
            elements.push(<li
                key={ i }
                className={clsx(
                    { ' w-[7px] h-[7px] rounded-full': true },
                    { 'bg-[#EAEAEA]': i !== dotActive },
                    { 'bg-[#37474F]': i === dotActive },
                )}
            ></li>)
        }
        return elements
    }


    return (
        <ul className='flex gap-3 absolute bottom-3'>
            {handlePaintDots()}
            {/* <div className='bg-[#EAEAEA] w-[7px] h-[7px] rounded-full'></div>
        <div className='bg-[#EAEAEA] w-[7px] h-[7px] rounded-full'></div>
        <div className='bg-[#37474F] w-[7px] h-[7px] rounded-full'></div> */}
        </ul>
    )
}
