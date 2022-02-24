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

    getCityCodeByKey(key: number) {
        return this.cities[key].code;
    }

    createShortCities(cities: string) {
        return Object.entries(cities).reduce((acc: any, [key]) => {
            acc[key] = null;
            return acc;
        }, {});
    }

    serializeCountries(countries: Array<Country>) {
        return countries.reduce((acc: any, country) => {
            acc[country.code] = country;
            return acc;
        }, {});
    }

    serializeCities(cities: any) {
        return cities.reduce((acc: any, city: any) => {
            const country_name = this.countries[city.country_code].name;
            const key = `${city.name},${country_name}`;
            acc[key] = {
                ...city,
                country_name,
            };
            return acc;
        }, {});
    }


}

