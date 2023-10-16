import { AppState } from "../AppState.js"
import { Time } from "../models/Time.js"
import { imageService } from "../services/ImageService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



function _drawImage() {
    const backgroundPicture = AppState.randomPicture
    document.body.style.backgroundImage = `url(${backgroundPicture?.imgUrl})`
    console.log('draw controller', backgroundPicture)
    setHTML('picture description', backgroundPicture?.BaseTemplate)
}


function _drawTime() {
    const times = new Date().toLocaleTimeString()
    console.log(times)


    setHTML('time', times)
}





export class ImageController {
    constructor() {
        console.log('Image Controller load')

        this.GetRandomImage()

        setInterval(_drawTime, 1000)
        AppState.on('randomPicture', _drawImage)
    }



    async GetRandomImage() {
        try {
            await imageService.GetRandomImage()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }
}