import axios from "axios";
import {ApiConfig} from "../config/api-config";
import {City} from "../model/city";

export class CitiesService {
    async findAllCities() {
        const response = await axios.get(`${ApiConfig.url}/cities`);
        const cities: Array<City> = response.data;
        return cities;
    }

    async findPrices(params: Request) {
        const response = await axios.get(`${ApiConfig.url}/prices/cheap`,{params});
        const price: Request = response.data;
        //console.log('Получил билеты нужных рейсов:' + JSON.stringify(cities))
        return price;
    }
}
