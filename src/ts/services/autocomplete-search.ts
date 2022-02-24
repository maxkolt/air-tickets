import {CitiesService} from "./cities-service";
import {City} from "../model/city";
import Autocomplete = M.Autocomplete;


export class AutocompleteSearch {
    citiesService: CitiesService = new CitiesService()

    inputListener() {
        const autocompleteElement: HTMLInputElement = document.getElementById('autocomplete-origin') as HTMLInputElement
        const autocomplete: Autocomplete = M.Autocomplete.getInstance(autocompleteElement)
        const textInput: string = autocompleteElement.value
        console.log(`вывожу текст напечатанный пользователем: ${textInput}`)

        const autocompleteJSON = this.citiesService.findAllCities()
            .then((cities: Array<City>) => this.updateAutocomplete(cities, autocomplete))
    }

    private updateAutocomplete(cities: Array<City>, autocomplete: M.Autocomplete) {
        const autocompleteData:any = {}
        for (const city of cities) {
            const cityName: string = city.name
            autocompleteData[cityName] = null
            autocomplete.updateData(autocompleteData)
        }
    }
}