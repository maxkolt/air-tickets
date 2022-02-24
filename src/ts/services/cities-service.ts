import axios from "axios";
import {ApiConfig} from "../config/api-config";
import {City} from "../model/city";

export class CitiesService {
    async findAllCities() {
        const response = await axios.get(`${ApiConfig.url}/cities`);
        const cities: Array<City> = response.data;
        return cities;
    }

    async getCitiesByCountryCode(code: string) {
        const cities: Array<City> = await this.findAllCities()
        return cities.filter(city => city.country_code === code);
    }

    async getCityCodeByKey(key: number) {
        const cities: Array<City> = await this.findAllCities()
        return cities[key].code;
    }
}
