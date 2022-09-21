import { useContext, useState } from "react";
import { Deck } from "./DeckApi";
import './App.css'



export default function FrontPage() {
  const { card, setcard,noarr,setnoarr} = useContext(Deck);
  const [statea, setStatea] = useState([]);
 
  



  const deletes = () => {
    var num = Math.floor(Math.floor(Math.random() * 51));
    console.log(num);
    const array = card.filter((index) => {
      return (index != num);
    })
    setcard(array);
    setnoarr([...noarr, card[num]]);
    console.log(noarr);
    console.log(card.length);

  }
 

  return (
    <>

      <div className="main">
        

        <div className="sections">
          <div>
            Section 1
            
            <button onClick={deletes}>draw</button>
          </div>
          <div>
            Section 2
          
            <button onClick={deletes}>draw</button>
          </div>
          <div>
            Section 3
           
            <button onClck={deletes}>draw</button>
          </div>
          <div>
            Section 4
           
            <button onClick={deletes}>draw</button>
          </div>
          <div>
            Section 5
            
            <button onClick={deletes}>draw</button>
          </div>


        </div>

        
        <div className="card-btn">
          <button onClick={deletes}>remove</button>
        </div>

      </div>

    </>
  );
}