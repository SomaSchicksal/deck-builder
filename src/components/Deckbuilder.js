import React, {useState, useEffect} from 'react'
import Content from './Content';
import DeckCards from "./DeckCards"
import "./Deckbuilder.css"

const Deckbuilder = () => {

    const [deck, setDeck]=useState([])

    const addToDeck=(card)=>{
        if(deck.length<60) {
          setDeck([...deck, card]);
        console.log(deck)
        }
        
    }

    const handleUpdateCards = (newCards) => {
      setDeck(newCards);
    }

    const removeFromDeck=(cardId)=>{
      const index = deck.findIndex((card) => card.id === cardId);
  if (index !== -1) {
    const updatedDeck = [...deck];
    updatedDeck.splice(index, 1);
    setDeck(updatedDeck);
  }
  }


    

    

    
  return (
    <div className="deckbuilder">
        <Content addToDeck={addToDeck} removeFromDeck={removeFromDeck}></Content>
        <DeckCards cards={deck} addToDeck={addToDeck} removeFromDeck={removeFromDeck} updateCards={handleUpdateCards}></DeckCards>
    </div>
  )
}

export default Deckbuilder