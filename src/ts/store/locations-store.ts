import {Country} from "../model/country";
import {CountriesService} from "../services/countries-service";
import {CitiesService} from "../services/cities-service";

export class LocationsStore {
    countries: Array<Country> = new Array<Country>()
    cities: Array<City> = new Array<City>() // TODO: City type


    async initAllLocations() {
        const countriesService = new CountriesService
        const citiesService = new CitiesService()
        this.cities = await countriesService.findAllCountries()
        this.countries = await citiesService.findAllCities()
    }

    getCitiesByCountryCode(code: string) {
        return this.cities.filter(city => city.country_code === code);
    }
}

