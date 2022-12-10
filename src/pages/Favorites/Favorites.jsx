import {useState, useEffect} from 'react';
import sendRequest from '../../utilities/send-request';

export default function Favorites({user}){
  const [currencyList, setCurrencyList]=useState([])
    useEffect(function(){
      async function getCurrencyList(){
        const currencies=await sendRequest(`/favorites/${user._id}`)
        setCurrencyList(currencies)
          console.log('currencylist')
      }
      getCurrencyList()
    },[])
  return(
    // const userCoins=currencyList.map(currency =>{
    //   return(
    //     <div>{coin.favorite}</div>
    //   )
    // })
    <></>
  )
}