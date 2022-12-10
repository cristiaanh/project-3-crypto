const Favorite = require('../../models/favorite');

module.exports = {
    create
  
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