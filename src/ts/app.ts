import {LocationsStore} from "./store/locations-store";


const store = new LocationsStore()

await store.initAllLocations()

console.log(store.countries)
console.log(store.cities)
