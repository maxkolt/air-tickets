import axios from "axios";
import {ApiConfig} from "../config/api-config";
import {City} from "../model/city";
import {PriceRequest} from "../model/price-request";


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

        const cityCode = elementOrigin.value;
        const destinationCode = elementDestination.value;
        const departDate = elementDepart.value;
        const returnDate = elementReturn.value;
        const currency = elementCurrency.value;

        const params = this.findCitiCodeByName(cityCode, destinationCode, departDate, returnDate, currency)

        const response = await axios.get(url, {params});
        const price = response;
        //console.log('Получил билеты нужных рейсов:' + JSON.stringify(price))
        return price;
    }

    private async findCitiCodeByName(origin: string, destination: string, departDate: string, returnDate: string, currency: string) {

        const cities: Array<City> = await this.findAllCities()
        const city = cities.find(c => c.code = origin)!
        const cityCode = city.code


        const params: PriceRequest = {
            origin: cityCode,
            destination: destination,
            depart_date: departDate,
            return_date: returnDate,
            currency: currency,
        }
        return params
    }
}
