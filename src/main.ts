import './assets/style/main.scss';
import './ts/plugins';
import {LocationsStore} from "./ts/store/locations-store";


const store = new LocationsStore()
await store.initAllLocations()

await store.getCitiesByCountryCode('')

console.log(JSON.stringify(store.getCityCodeByKey(2)))
console.log(JSON.stringify(store.createShortCities('Moscow')))
console.log(JSON.stringify(store.serializeCountries([])))
