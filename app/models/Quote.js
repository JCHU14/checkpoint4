export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
        <p class="quote-title">${this.content}</p>
        <p class="quote-description">Author: ${this.author}</p>`
    }
}