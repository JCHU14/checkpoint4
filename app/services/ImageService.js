import { AppState } from "../AppState.js";
import { Image } from "../models/Image.js";
import { api } from "./AxiosService.js";





class ImageService {
    async GetRandomImage() {
        const res = await api.get('api/images')
        console.log('Image Service', res.data)
        AppState.randomPicture = new Image(res.data)
        console.log(AppState.randomPicture)
    }
}


export const imageService = new ImageService();