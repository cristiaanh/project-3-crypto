import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import Favorites from '../Favorites/Favorites';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import axios from 'axios';
import Coin from '../../Coin';
import Main from '../Main';



function App() {
  const [user, setUser] = useState(getUser());
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, []);
  
  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<Main coins ={coins} search ={search} user={user} handleChange={handleChange}/>} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;