import React from 'react'

const Menu = ({menuName, className}) => {
  return (
    <ul>
        <li className={` font-DM font-semibold text-2xl ${className}`}>{menuName}</li>
    </ul>
  )
}

export default Menu