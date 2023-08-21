import axios from 'axios'

const baseUrl = 'http://api.weatherapi.com/v1/current.json?'
const apiKey = 'a24648827ba441f5952154402231808'

const get = (city) => {
    const request = axios.get(`${baseUrl}key=${apiKey}&q=${city}`)
    return request.then(response => response.data)
}

export default {get}