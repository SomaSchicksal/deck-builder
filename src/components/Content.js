import React, {useState,useEffect} from 'react'
import "./Content.css"

import Card from "./Card"
import Modal from "./Modal"

const Content = (props) => {
    const[originalCards, setOriginalCards]=useState([])
    const[search, setSearch]=useState("")
    const[cards, setCards]=useState([])
    const[modalImage, setModalImage]=useState("")
    const[showModal, setShowModal]=useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(9)
    
    const handleSearch=(e)=>{
        const searchTerm=e.target.value;
        setSearch(searchTerm);
        

        const filteredCards=originalCards.filter(card=>card.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCards(filteredCards)
        
        
        
    }

    

    const apiKey="5bd47c1b-e838-4878-880d-6335c53a1202"

    

    const handleImageClick=(url)=>{
        setModalImage(url);
        setShowModal(true)
    }

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1)
    }

    const handlePreviousClick = () => {
        setCurrentPage(currentPage - 1)
    }

    useEffect(()=>{
        const fetchData=async ()=>{
            await fetch(`https://api.pokemontcg.io/v2/cards?page=${currentPage}&pageSize=${pageSize}&orderBy=name&q=name:*${search}*`,
            {
                method:"GET",
                headers:{
                    'X-Api-Key': '5bd47c1b-e838-4878-880d-6335c53a1202'
                }
            }).then((res)=>res.json()).then((data)=>{

                
                
                setOriginalCards(data.data);
                setCards(data.data);
                console.log(data)
            }).catch((error) => {
                console.error('API Error:', error);
              });
            
        };
        fetchData();
    },[currentPage, search, pageSize])
  return (

      <div className="content-container">
          <div className="search-container">
              <input type="search" className="searchbar" onChange={handleSearch} placeholder="Search for a card" />
          </div>

          <div className="content">




              <div className="cards">

                  {cards?.map((card) => {
                      return <Card
                          name={card.name}
                          image={card.images.small}
                          rarity={card.rarity}
                          key={card.id}
                          id={card.id}
                          number={card.number}
                          setName={card.set.name}
                          setImage={card.set.images.symbol}
                          onClick={() => handleImageClick(card.images.large)}
                          addToDeck={props.addToDeck}
                          removeFromDeck={props.removeFromDeck}></Card>
                  })}

                  {showModal && (
                      <Modal image={modalImage} closeModal={() => setShowModal(false)}></Modal>
                  )}



              </div>

              <div className="pagination">
                  <button disabled={currentPage === 1} onClick={handlePreviousClick}>Previous</button>
                  <p style={{ color: "white" }}>{currentPage}</p>
                  <button onClick={handleNextClick}>Next</button>
              </div>


          </div>
      </div>
  )
}

export default Content