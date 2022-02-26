import axios from "axios";
import {ApiConfig} from "../config/api-config";
import {City} from "../model/city";

export class CitiesService {
    async findAllCities() {
        const response = await axios.get(`${ApiConfig.url}/cities`);
        const cities: Array<City> = response.data;
        return cities;
    }

    async findPrices() {
        const urlPrice: string = '/prices/cheap';
        const urlOrigin: string = 'origin=HRK';
        const urlDestination: string = 'destination=IEV';

        const urlData = `departDate=2019-09`;
        const response = await axios.get(`${ApiConfig.url}${urlPrice}?${urlOrigin}&${urlDestination}&${urlData}&returnDate=2019-09&currency=USD`);
        const price = response.data;
        console.log('Получил билеты нужных рейсов:' + JSON.stringify(price))
        return price;
    }
}

const citiesService: CitiesService = new CitiesService()
await citiesService.findPrices()