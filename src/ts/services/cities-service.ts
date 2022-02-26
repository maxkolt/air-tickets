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
        const urlPrice = '/prices/cheap';

        const paramOrigin = 'origin=HRK';
        const paramDestination= 'destination=IEV';
        const paramDepartDate = `depart_date=2022-01`;
        const paramReturnDate = `return_date=2022-02`;

        let paramCurrency = `currency=USD`;

    // &${paramReturnDate}
        const response = await axios.get(
            `${ApiConfig.url}${urlPrice}?${paramReturnDate}&${paramOrigin}&${paramDestination}&${paramDepartDate}&${paramCurrency}`
        );
        const price = response.data;
        console.log('🙈 Получил билеты нужных рейсов: \n' + JSON.stringify(price))
        return price;
    }
}
