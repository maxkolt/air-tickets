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

