import React from 'react'
import { getData } from '../api'

export const loader = () => {
    const weapons = getData("weapons");
    return weapons; 
}
const Weapon = () => {
  return (
    <div>Weapon</div>
  )
}

export default Weapon