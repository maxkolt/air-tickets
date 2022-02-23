import {Country} from "../model/country";
import {CountriesService} from "../services/countries-service";
import {CitiesService} from "../services/cities-service";
import {City} from "../model/city";

export class LocationsStore {
    countries: Array<Country> = new Array<Country>()
    cities: Array<City> = new Array<City>()


    async initAllLocations() {
        const countriesService = new CountriesService
        const citiesService = new CitiesService()
        this.countries = await countriesService.findAllCountries()
        this.cities = await citiesService.findAllCities()
    }

    getCitiesByCountryCode(code: string): Array<City> {
        return this.cities.filter(city => city.country_code === code);
    }
}

