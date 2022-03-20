import React from 'react'

interface Props {
    src: string,
    alt: string
}

export const StarAvatar = ({ src, alt }: Props) => {
  return (
    <img className="star-avatar" src={src} alt={ alt } />
  )
}
