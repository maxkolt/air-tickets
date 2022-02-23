import axios from "axios";
import {ApiConfig} from "../config/api-config";
import {City} from "../model/city";

export class CitiesService {
    async findAllCities() {
        const response = await axios.get(`${ApiConfig.url}/cities`);
        const cities: Array<City> = response.data;
        //console.log('получил все города ' + cities)
        return cities;
    }
}
