import React from 'react'
import "./Card.css"

const Card = (props) => {

  

  

  
  return (
    <>
      {props.image && (
        <div className="card" id={props.id}>
          
          <img src={props.image} className="image" onClick={props.onClick}></img>
          <h1 className="name">{props.name}</h1>
          <div className="card-buttons">
            <button onClick={()=>props.addToDeck({
              name:props.name,
              img:props.image,
              modal:props.onClick,
              add:props.addToDeck(),
              id:props.id
            })}>Add Card</button>
            <button onClick={()=>{props.removeFromDeck(props.id)}}>Remove Card</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Card