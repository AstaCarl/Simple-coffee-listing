import React from 'react'
import { useEffect } from 'react';
import filledStarIcon from '../Img/Star_fill.svg'
import starIcon from '../Img/Star.svg'
import './card.css'

export default function Card(props) {
    const {name, image, price, rating, votes, popular, available} = props
    

  return (
    <div className='flex column'>
        {popular && <span className="popular">Popular</span>}
        <img className='productImg' src={image} alt="" />
        <div className="flex between">
        <h2>{name}</h2>
        <div className="price">
        <span>{price}</span>
        </div>
        </div>
        <div className="flex start">
        {votes > 1 && <img className='icon' src={filledStarIcon} alt="" />}
        {votes <= 0 && <img className='icon' src={starIcon} alt="" />}
        <h2>{rating}</h2>
        {votes > 1 && <p>({votes} votes)</p>}
        {votes <= 0 && <p>No ratings</p>}
        <div className="spacer"></div>
        {available === false && <p className='soldOut'>Sold Out</p>}
        </div>
    </div>
  )
}
