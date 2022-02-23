import axios from "axios";
import {MyConfig} from "../config/apiConfig";
import {City} from "../model/city";

export class CitiesService {
    async findAllCities() {
        const response = await axios.get(`${MyConfig.url}/cities`);
        const cities: Array<City> = response.data;
        //console.log('получил все города ' + cities)
        return cities;
    }
}
