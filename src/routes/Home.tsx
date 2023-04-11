import { useState, useEffect } from "react";

import { CountryCard } from "../components/CountryCard";
import { SearchBar } from '../components/SearchBar';
import { FilterByRegion } from "../components/FilterByRegion";

import { filterByCharacter } from "../helpers";
import { Countries, FilterByRegiontType } from '../types';

import countriesData from "../data.json";

import '../styles/index.scss'

export const Home = () => {
    const [countries, setCountries] = useState(countriesData)
    const [countryInput, setCountryInput] = useState<string>("");
    const [searchedCountries, setSearchCountries] = useState<Countries | []>(countries);
    const [filterByRegion, setFilterByRegion] = useState<FilterByRegiontType>("All")

    const handleSetCountry = (value: string) => setCountryInput(value);
    const handleFilterByRegion = (value: FilterByRegiontType) => setFilterByRegion(value);

    useEffect(() => {
        if (filterByRegion !== "All") {
            const filteredCountries = countriesData.filter(({region}) => region === filterByRegion);
            setCountries(filteredCountries);
        } else {
            setCountries(countriesData);
        }
    }, [filterByRegion]);

    useEffect(() => {
        setSearchCountries(filterByCharacter(countryInput, countries))
    }, [countryInput, countries])

    return (
        <div>
            <div className="search-header">
                 <SearchBar handleChange={handleSetCountry} value={countryInput} />
                 <FilterByRegion handleFilterByRegion={handleFilterByRegion} region={filterByRegion} />
            </div>
            <div className={"cards-container"}>
                {searchedCountries.map(country => (
                    <CountryCard 
                        key={country.name}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital || ''}
                        img={country.flags.png}
                        numericCode={country.numericCode}
                    />
                ))}
            </div>
        </div>
    );
};