import {LocationsStore} from "./store/locations-store";


const store = new LocationsStore()

await store.initAllLocations()

console.log(store.cities)
console.log(store.countries)

await store.getCitiesByCountryCode('RE')