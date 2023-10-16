import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"








class QuoteService {
    async GetQuotes() {
        const res = await api.get('api/quotes')
        console.log('got quotes', res.data)
        AppState.quotes = new Quote(res.data)
        console.log(AppState.quotes)
    }
}


export const quoteService = new QuoteService();