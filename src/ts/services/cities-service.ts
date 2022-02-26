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
        const url = `${ApiConfig.url}${urlPrice}`;

        const elementOrigin: HTMLInputElement = document.getElementById('autocomplete-origin') as HTMLInputElement
        const elementDestination: HTMLInputElement = document.getElementById('autocomplete-destination') as HTMLInputElement
        const elementDepart: HTMLInputElement = document.getElementById('datepicker-depart') as HTMLInputElement
        const elementReturn: HTMLInputElement = document.getElementById('datepicker-return') as HTMLInputElement
        const elementCurrency: HTMLInputElement = document.getElementById('currency-select') as HTMLInputElement


        const origin = elementOrigin.value;
        const destination = elementDestination.value;
        const depart_date = elementDepart.value;
        const return_date = elementReturn.value;
        const currency = elementCurrency.value;


        const params: Request = {
                origin: origin,
                destination: destination,
                depart_date: depart_date,
                return_date: return_date,
                currency: currency
            }
        const response = await axios.get(url, {params});
        const price = response.data.data;
        console.log('Получил билеты нужных рейсов:' + JSON.stringify(price))
        return price;
    }
}
