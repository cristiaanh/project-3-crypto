import * as currencyApi from '../utilities/currency-api'
export async function saveCurrency(formData){
    console.log('service')
    await currencyApi.saveCurrency(formData)
    return(console.log('stuff'))
}

export async function index(userId){
    await currencyApi.index(userId)
    return(console.log('stuff'))
}