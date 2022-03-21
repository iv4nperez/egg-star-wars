import clsx from "clsx"

interface Props {
  children: (JSX.Element | string | number ) | (JSX.Element | string | number )[],
  background: 'gray' | 'white' | 'purple'
}


export const StarItemSlider = ({ children, background }: Props) => {
  return (
    <section className={  clsx(
      {"w-screen h-screen flex-shrink-0": true},
      { 'bg-[#BFC7D3]': background === 'gray' },
      { 'bg-[#FFFFFF]': background === 'white' },
      { 'bg-purple-400': background === 'purple' }
    )}>{ children }</section>
  )
}
