import {Countries} from './types';

type FilterByCharacter = (input: string, countries: Countries) => Countries | [];
export const filterByCharacter: FilterByCharacter = (input, countries) => (countries.filter(({name}) => (name.substring(0, input.length).toLowerCase() === input.toLowerCase())));