import axios from 'axios';
import {ApiConfig} from "../config/api-config";
import {Country} from "../model/country";

export class CountriesService {
    async findAllCountries() {
        const response = await axios.get(`${ApiConfig.url}/countries`);
        const countries: Array<Country> = response.data;
        // console.log('получил все страны ' + JSON.stringify(countries))
        return countries;
    }

}
