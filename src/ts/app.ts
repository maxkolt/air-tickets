import {CountriesService} from "./services/countries-service";
import {CitiesService} from "./services/cities-service";

const countriesService = new CountriesService
await countriesService.findAllCountries()

const citiesService = new CitiesService()
await citiesService.findAllCities()