import React, {useState, useEffect} from 'react'
import Card from './Card'
import "./DeckCards.css"

const DeckCards = (props) => {

  console.log(props.cards)

  

  const[deckName, setDeckName]=useState("")
  const[savedDecks, setSavedDecks]=useState([])

  const handleDeckName=(e)=>{
    setDeckName(e.target.value);
    console.log(deckName)
  }

  const handleSaveDeck=()=>{
    const deck= {
      name:deckName,
      cards:props.cards
    };

    localStorage.setItem(deckName, JSON.stringify(deck))
  }

  const handleSelectDeck = (e) => {
    const deckName = e.target.value;
  const deck = JSON.parse(localStorage.getItem(deckName));
  if (deck) {
    setDeckName(deckName);
    props.updateCards(deck.cards);
  }
  };


  useEffect(() => {
    const deckNames = Object.keys(localStorage);
    setSavedDecks(deckNames);
  }, []);


 

  

  

  
  return (
    
    <div className="deckcards-content">
      <div className="main-content">
        <h1>{deckName}</h1>
        <h2>Cards in deck:{props.cards.length}/60</h2>
        <input className="deck-search" onChange={handleDeckName}></input>
        <button className="save-btn" onClick={handleSaveDeck}>Save deck</button>
        <select className="select-btn"onChange={handleSelectDeck}>
          <option value="">Select a saved deck</option>
          {savedDecks.map((deckName) => (
            <option className="option" key={deckName} value={deckName}>
              {deckName}
            </option>
          ))}
        </select>
      </div >
      <div className="deck-cards">
      {props.cards.map((card, index) => (
        <Card addToDeck={props.addToDeck} removeFromDeck={props.removeFromDeck} name={card.name} image={card.img} onClick={card.modal} key={`${card.id}-${index}`} id={card.id} ></Card>



      ))}
      </div>
    </div>
  )
}

export default DeckCards