export class Image {
    constructor(data) {
        this.imgUrl = data.url
        this.author = data.author

    }

    get BaseTemplate() {
        return `
            <p class="text-light fs-3 imageText">Image By: ${this.author}</p>`
    }


}


