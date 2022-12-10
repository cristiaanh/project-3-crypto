const Favorite = require('../../models/favorite');

module.exports = {
    create,
    index,
    deleteBody
  
};

async function create(req, res) {
    console.log('controller')
    try{
        const currency = await Currency.create(req.body)
        res.jason(currency)
    }
    catch(err) {
        res.status(400).json(err)
    }
}

function deleteBody(req, res) {
    Favorite.findByIdAndDelete(req.params.id)
}

async function index(req, res) {
   const favoriteList= await Favorite.find({_id: req.params.id})
    
}