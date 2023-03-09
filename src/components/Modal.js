import React from 'react'
import "./Modal.css"

const Modal = (props) => {
  return (
    <div className="modal">
        <div className="modal-content">
        <img src={props.image}></img>
        <button className="button" onClick={props.closeModal}>Close</button>
        </div>
    </div>
  )
}

export default Modal