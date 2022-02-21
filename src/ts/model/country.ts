import {Cases} from "./cases";
import {NameTranslations} from "./name-translation";

export interface Country {
    code: string;
    name: string;
    currency: string;
    name_translations: NameTranslations
    cases: Cases
}