import './assets/style/main.scss';
import './ts/plugins';
import {AutocompleteSearch} from "./ts/services/autocomplete-search";
import {DataToSend} from './ts/services/getdatatosend-servies'

const autocomplete: AutocompleteSearch = new AutocompleteSearch()
document.addEventListener('DOMContentLoaded', () => {
    const elems = document.querySelectorAll('.autocomplete')
    M.Autocomplete.init(elems)
})

const elementOrigin: HTMLInputElement = document.getElementById('autocomplete-origin') as HTMLInputElement
elementOrigin.addEventListener('input', () => autocomplete.inputListener(elementOrigin))

const elementDestination: HTMLInputElement = document.getElementById('autocomplete-destination') as HTMLInputElement
elementDestination.addEventListener('input', () => autocomplete.inputListener(elementDestination))


const form: HTMLFormElement = document.getElementById('form') as HTMLFormElement
form.addEventListener('submit', (el) => {
    el.preventDefault()
})
const data = new FormData(form);
for (let entry of data) {
    console.log(entry);
}