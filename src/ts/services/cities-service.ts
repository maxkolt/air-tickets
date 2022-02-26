import axios from "axios";
import {ApiConfig} from "../config/api-config";
import {City} from "../model/city";
import {Request} from "../model/request";

export class CitiesService {
    async findAllCities() {
        const response = await axios.get(`${ApiConfig.url}/cities`);
        const cities: Array<City> = response.data;
        return cities;
    }

    async findPrices() {
        const response = await axios.get('https://aviasales-api.herokuapp.com/prices/cheap?origin=HRK&destination=IEV&departDate=2019-09&returnDate=2019-09&currency=USD');
        const price = response.data;
        console.log('Получил билеты нужных рейсов:' + JSON.stringify(price))
        return price;
    }
}
const citiesService: CitiesService = new CitiesService()
await citiesService.findPrices()