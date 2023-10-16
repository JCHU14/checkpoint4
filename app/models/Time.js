export class Time {
    constructor(data) {
        this.time = data.time

    }

    get TimeTemplate() {
        return `
        <p>${this.time}<p>`
    }
}