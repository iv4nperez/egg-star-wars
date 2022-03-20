
import clsx from 'clsx';
interface Props {
    children: (JSX.Element | string | number ) | (JSX.Element | string | number )[],
    small?: Boolean,
    medium?: Boolean,
    large?: Boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}


export const StarButton = ({ children, small , medium, large, onClick }: Props) => {
  return (
    <>
        <button
            onClick={ onClick }
            className={clsx(
                { 'star-button': true },
                { 'small-button': small },
                { 'medium-button': medium },
                { 'large-button': large }
            )}>
            { children }
        </button>
    </>
  )
}
