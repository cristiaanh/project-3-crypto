const Favorite = require('../../models/favorite');

module.exports = {
    create,
    index,
    deleteBody

  
};

async function create(req, res) {
    console.log('controller')
    try{
        const currency = await Favorite.create(req.body)
        res.json(currency)
    }
    catch(err) {
        res.status(400).json(err)
    }
}

// function deleteBody(req, res) {
//     console.log('made it to delete function')
//    // Favorite.findByIdAndDelete(req.params.id)
// 
// async function deleteBody(req, res) {
//     // console.log('made it to controllers')
//     const favorite = await Favorite.findOne({user: req.params.userId });
//     console.log(favorite)
//     favorite.remove(req.params.id);
//     await favorite.save();
//     res.json(favorite);
// }
async function deleteBody(req, res) {
    const favorite = await Favorite.findByIdAndDelete(req.params.id);
    res.json(favorite);
  }

async function index(req, res) {
   const favoriteList= await Favorite.find({user: req.params.id})
   res.json(favoriteList)
}