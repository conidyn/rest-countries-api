import { useState, useEffect } from "react";
import { Country, Countries } from '../types';
import { CountryCard } from "../components/CountryCard";
import { SearchBar } from '../components/SearchBar';
import countries from "../data.json";
import '../styles/index.scss'
import { filterByCharacter } from "../helpers";

export const Home = () => {
    const [countryInput, setCountryInput] = useState<string>("");
    const [searchedCountries, setSearchCountries] = useState<Countries | []>(countries);
    const handleSetCountry = (value: string) => setCountryInput(value);

    useEffect(() => {
        setSearchCountries(filterByCharacter(countryInput, countries))
    }, [countryInput])

    return (
        <div className={"dark-theme"}>
            <SearchBar handleChange={handleSetCountry} value={countryInput} />
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