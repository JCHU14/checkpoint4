import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawQuotes() {
    const quotes = AppState.quotes
    console.log('quote controller', quotes)
    setHTML('quotes', quotes?.QuoteTemplate)
}




export class QuoteController {
    constructor() {
        this.GetQuotes()
        AppState.on('quotes', _drawQuotes)
    }


    async GetQuotes() {
        try {
            await quoteService.GetQuotes()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}