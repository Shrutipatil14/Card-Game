import React, { createContext, useEffect, useState } from 'react'
export const Deck= createContext([]);


const DeckApi = ({children}) => {
  
    const [noarray,setnoarray]=useState([]);
    const [card, setCard] = useState([]);
 
     
     
  var symbol = ["♥","♣","♦","♠",];
  var colors = ["Red", "Black","Red","Black",];
  var numbers = [  "2","3","4","5","6","7","8","9","10","A","J","Q","K"];

  useEffect(() => {
    
    var deck = [];
    for (let i = 0; i < symbol.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        deck.push({     
          suit: symbol[i],
          rank: numbers[j],
            color: colors[i]
        }); 
        
        
      }
    } 

    
    
    setCard(deck);
   
   
  }, []);


  return (
    <Deck.Provider value={{card,setCard,noarray,setnoarray}}>
     {children}
     </Deck.Provider>
  )
}

export default DeckApi