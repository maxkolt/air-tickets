import {Coordinates} from "./coordinates";
import {NameTranslations} from "./name-translation"
import {Cases} from "./cases";

export interface City {
    country_code: string;
    code: string;
    coordinates: Coordinates;
    name: string;
    time_zone: string;
    name_translations: NameTranslations;
    cases: Cases;
}