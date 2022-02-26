import {CitiesService} from "./cities-service";
import {City} from "../model/city";
import {Request} from "../model/request";
import Autocomplete = M.Autocomplete;
import AutocompleteData = M.AutocompleteData;

export class AutocompleteSearch {
    private readonly citiesService: CitiesService = new CitiesService()
    private cities: Array<City> = new Array<City>()

    constructor() {
        this.citiesService.findAllCities().then((citiesAll: Array<City>) => this.cities = citiesAll)
    }

    inputListener(autocompleteElement: HTMLInputElement) {
        const autocomplete: Autocomplete = M.Autocomplete.getInstance(autocompleteElement)
        const textInput: string = autocompleteElement.value
        console.log(`вывожу текст напечатанный пользователем: ${textInput}`)

        this.updateAutocomplete(autocomplete)
    }

    getAllDataToSend(event: SubmitEvent) {
        event.preventDefault()

        const elementOrigin: HTMLInputElement = document.getElementById('autocomplete-origin') as HTMLInputElement
        const elementDestination: HTMLInputElement = document.getElementById('autocomplete-destination') as HTMLInputElement
        const elementDepart: HTMLInputElement = document.getElementById('datepicker-depart') as HTMLInputElement
        const elementReturn: HTMLInputElement = document.getElementById('datepicker-return') as HTMLInputElement
        const elementCurrency: HTMLInputElement = document.getElementById('currency-select') as HTMLInputElement

        const request: Request = {
            origin: elementOrigin.value,
            destination: elementDestination.value,
            departData: elementDepart.value,
            returnData: elementReturn.value,
            currency: elementCurrency.value,
        }
         console.warn(`готовые данные для отправки: ${JSON.stringify(request)}`);
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
