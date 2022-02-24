import {CitiesService} from "./cities-service";
import {City} from "../model/city";
import Autocomplete = M.Autocomplete;
import AutocompleteData = M.AutocompleteData;


export class AutocompleteSearch {
    citiesService: CitiesService = new CitiesService()
    cities: Array<City> = new Array<City>()

    constructor() {
        this.citiesService.findAllCities()
            .then((citiesAll: Array<City>) => {
                this.cities = citiesAll
            })
    }

    inputListener(autocompleteElement: HTMLInputElement) {
        const autocomplete: Autocomplete = M.Autocomplete.getInstance(autocompleteElement)
        const textInput: string = autocompleteElement.value
        console.log(`вывожу текст напечатанный пользователем: ${textInput}`)

        this.updateAutocomplete(autocomplete)
    }

    getAllDataToSend() {
        const form: HTMLFormElement = document.getElementById('form') as HTMLFormElement
        const data = new FormData(form);
        for (let entry of data) {
            console.log('все данные формы помещены в этот обьект: '+ entry);
        }
    }

    private updateAutocomplete(autocomplete: M.Autocomplete) {
        const autocompleteData: AutocompleteData = {}
        for (const city of this.cities) {
            const cityName: string = city.name
            autocompleteData[cityName] = null
            autocomplete.updateData(autocompleteData)
        }
    }
}