import { useContext, useEffect, useState } from "react";
import Ans from "./Ans";
import { Deck} from "./DeckApi";


export default function Decks() {
  // const [card, setcard] = useState([]);
  const {card,setcard,array,setArray} = useContext(Deck);
 
const remove=()=>{
  var num = Math.floor(Math.floor(Math.random() * 51));
  console.log(num);
  const foo=card.filter((a,index)=>{
     return (index!=num);
  })
    setcard(foo);
  setArray([...array,card[44]]);
  console.log(array);

}
  return (
    <>
      {


card.map((item,index)=>{
  return(
    <li key={index}>{item.suit}</li>
  )
})


     }


      <button onClick={remove}>remove</button>
    
     
    

    </>
  );
}