import React from 'react'
import './Card.css'
import Wave from './Wave'

const Card = props => (
  <div className="Card">
    <img src={props.image} alt="" />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>
)

export default Card
