import axios from 'axios';
import {MyConfig} from "../config/apiConfig";
import {Country} from "../model/country";

export class CountriesService {
    async findAllCountries() {
        const response = await axios.get(`${MyConfig.url}/countries`);
        const countries: Array<Country> = response.data;
       // console.log('получил все страны ' + JSON.stringify(countries))
        return countries;
    }

}
