import { useState, useEffect } from 'react';
import sendRequest from '../../utilities/send-request';
import * as currencyApi from '../../utilities/currency-api'
import FavoriteCoinCard from '../../components/FavoriteCoinCard/FavoriteCoinCard';

export default function Favorites({ user}) {
  const [currencyList, setCurrencyList] = useState([])
  const [deleteFavorite, setDeleteFavorite] = useState(0)
  useEffect(function () {
    async function getCurrencyList() {
      const currencies = await sendRequest(`/api/favorites/${user._id}`)
      setCurrencyList(currencies)
    }
    getCurrencyList()
  }, [deleteFavorite])

return(
  <>
  {currencyList.map((favorites, i)=>(
    <FavoriteCoinCard key={i} user={user} favorite={favorites} setDeleteFavorite={setDeleteFavorite} deleteFavorite={deleteFavorite} />
  ))
  }</>)
}