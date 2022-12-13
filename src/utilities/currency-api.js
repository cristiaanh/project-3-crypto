import sendRequest from "./send-request";
const BASE_URL = '/api/favorites';

export function saveCurrency(formData){
    return sendRequest(BASE_URL, 'POST', formData)
    console.log('currency api')
}

export function index(userId){
    sendRequest(`${BASE_URL}/${userId}`)
}

export function deleteCoin(coinId){
    sendRequest(`${BASE_URL}/${coinId}`, 'DELETE')
}