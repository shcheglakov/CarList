import axios from "axios"
import { ICars } from "../pages/types"

class CarsService {
    // #private autoRuUrl = 'http://localhost:5173/'

    async getCars() {
        const {data} = await axios.get<ICars[]>("db.json")
        return data
    }  
}

export const carsService = new CarsService()