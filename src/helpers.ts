import { Countries, Country } from './types';
import countries from "./data.json"

type FilterByCharacter = (input: string, countries: Countries) => Countries | [];
export const filterByCharacter: FilterByCharacter = (input, countries) => (countries.filter(({ name }) => (name.substring(0, input.length).toLowerCase() === input.toLowerCase())));

type GetBordersNameByAlpha3Code = (borders: string[]) => string[] | [];
const getBordersNameByAlpha3Code: GetBordersNameByAlpha3Code = (borders) => (countries
        .map(({ alpha3Code, name }) => ({ alpha3Code, name }))
        .reduce<string[] | []>((acc, current) => {
            if (borders.includes(current.alpha3Code)) acc = [...acc, current.name]
            return acc;
        }, [])
)

type GetCountryByNumericCode = (numericCode: string, countries: Countries) => Country | null;
export const getCountryByNumericCode: GetCountryByNumericCode = (numericCode, countries) => {
    let countryDetails = null
    for (const country of countries) {
        if (country.numericCode === numericCode) countryDetails = { 
            ...country, 
            bordersName: country.borders ? getBordersNameByAlpha3Code(country.borders) : []
        }
    }
    return countryDetails;
}
