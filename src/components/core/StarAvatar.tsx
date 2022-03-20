import clsx from "clsx"

interface Props {
    src: string,
    alt: string,
    small?: boolean,
    medium?: boolean,
    large?: boolean
}

export const StarAvatar = ({ src, alt, small, medium, large }: Props) => {
  return (
    <img className={ clsx(
      { 'star-avatar': true },
      { 'star-avatar-small': small },
      { 'star-avatar-medium' : medium },
      { 'star-avatar-large': large }
    )} 
    src={src} 
    alt={ alt } />
  )
}
