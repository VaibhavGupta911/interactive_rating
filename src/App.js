
import { createContext, useState } from 'react';
import './App.css';
import Card1 from './Card1';
import Card2 from './Card2';
import Acontext from './Acontext';
function App() {
  const [toggle, setToggle] = useState(true);
  const toggleChange = () => { setToggle((e) => !e) }
  const [rating,setRating]=useState();
  const ratingchange=(e)=>{setRating(e)}
  return (
    <>
      <Acontext.Provider value={{ status: toggle, togglechange: toggleChange ,rating:rating,ratingchange:ratingchange}}>
        <div className='app'>
          {toggle ? <Card1 /> : <Card2 />}
        </div>
      </Acontext.Provider>
    </>
  );
}

export default App;
