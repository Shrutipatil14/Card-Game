

import './App.css';
import DeckApi from './DeckApi';
import FrontPage from './FrontPage';
import Header from './Header';






function App() {

  return (
    <div className="App"> 
    <Header/>
      <FrontPage/>
      <DeckApi/>
    </div>
    
     
  );
}

export default App;
