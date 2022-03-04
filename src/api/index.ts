import axios from 'axios'

export const CoinAPI = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/"
})
