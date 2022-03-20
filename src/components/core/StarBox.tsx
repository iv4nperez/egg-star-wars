
interface Props {
    itemKey: string,
    valueKey: string
}

export const StarBox = ({ itemKey , valueKey }: Props) => {

  return (
    <li className="star-box-container">
        <div className="flex flex-col items-center">
            <span className="text-[#073045] font-semibold text-base">{ itemKey }</span>
            <span className="text-[#073045] font-semibold text-base">{ valueKey }</span>
        </div>
    </li>
  )
}