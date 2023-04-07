import {Countries, Country} from './types';

type FilterByCharacter = (input: string, countries: Countries) => Countries | [];
export const filterByCharacter: FilterByCharacter = (input, countries) => (countries.filter(({name}) => (name.substring(0, input.length).toLowerCase() === input.toLowerCase())));

type GetCountryByNumericCode = (numericCode: string, countries: Countries) => Country | null;
export const getCountryByNumericCode: GetCountryByNumericCode = (numericCode, countries) => {
    let countryDetails = null
    for (const country of countries) {
        if (country.numericCode === numericCode) countryDetails = {...country}
    }
    return countryDetails;
}