import axios from "axios";
import {MyConfig} from "../config/apiConfig";

export class CitiesService {
   async findAllCities(){
       const response = await axios.get(`${MyConfig.url}/cities`);
       const cities: Array<City> = response.data;
       //console.log('получаю все города ' + response)
       return cities;
    }
}
