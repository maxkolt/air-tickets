import {Api} from "./services/apiService";

const api = new Api();

await api.countries().then(res => console.log(res))
await api.cities().then(res2 => console.log(res2))