import Coin from '../Coin';
import {useState} from 'react';
import * as currencyApi from '../utilities/currency-api'

function Main({coins, search, user, handleChange}) {
    const [currency, setCurrency]= useState({
         coin:'',
         user:`${user._id}`
     })

     const handleFormChange=(event) =>{
        console.log('change')
        setCurrency({...currency, [event.target.name]:event.target.value})
     }

     const handleSubmit=async function(event){
         event.preventDefault()
         await currencyApi.saveCurrency(currency)
     }
    
  
  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>currency</label>
            <input name='coin' type ='text'value={currency.favorite} onChange={handleFormChange}></input>
            <button type='submit' value='Submit'>save coin</button>
        </form>
      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'>Search a currency</h1>
          <form>
            <input type='text' placeholder='Search'
            className='coin-input' onChange={handleChange}/>
          </form>
        
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        );
        })}
       </div>
       
       
       </>
    );
  }
  
  export default Main;