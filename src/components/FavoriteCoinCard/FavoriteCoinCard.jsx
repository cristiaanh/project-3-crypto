import { Link } from 'react-router-dom'

export default function FavoriteCoinCard ({ user, setDeleteFavorite, deleteFavorite, favorite, }){

    const handleClick = async () => { console.log(favorite._id)
        const response = await fetch(`/api/favorites/${user._id}/${favorite._id}`, {
          method: 'DELETE'
        }).then(res => res.json())
        console.log(response)
        // update(response)
        setDeleteFavorite(deleteFavorite-1)
      }


return(
    <div className='favoriteCard'>
    {favorite.coin}  
    <button onClick={handleClick}>delete</button>

    </div>
)
}  