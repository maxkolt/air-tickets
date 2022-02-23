import 'materialize-css/sass/materialize.scss';
import 'materialize-css/dist/js/materialize.min.js';

const select = document.querySelectorAll('select');
M.FormSelect.init(select);

const datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
   showClearBtn: true,
});

/*
export function getDatepickerInstance(elem) {
    return M.Datepicker.getInstance(elem)
}*/

const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {
    data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
    }
})
/*
export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem)
}*/
