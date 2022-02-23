import {Coordinates} from "./coordinates";
import {NameTranslationsCity} from "./name-translation-city"
import {CasesCity} from "./cases-city";

export interface City {
    country_code: string;
    code: string;
    coordinates: Coordinates;
    name: string;
    time_zone: string;
    name_translations: NameTranslationsCity;
    cases: CasesCity;
}