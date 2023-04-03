import { useState } from "react";
import { Country, Countries } from '../types';
import { CountryCard } from "../components/CountryCard";
import { SearchBar } from '../components/SearchBar';
import countries from "../data.json";
import '../styles/index.scss'

export const Home = () => {
    const [country, setCountry] = useState<string>("");
    const [searchedCountry, setSearchCountry] = useState<Country | null>(null);
    const handleSetCountry = (value: string) => setCountry(value);

    return (
        <div className={"dark-theme"}>
            <SearchBar handleChange={handleSetCountry} value={country} />
            <div className={"cards-container"}>
                {countries.map(country => (
                    <CountryCard 
                        key={country.name}
                        name={country.name}
                        population={country.population}
                        region={country.region}
                        capital={country.capital || ''}
                        img={country.flags.png}
                    />
                ))}
            </div>
        </div>
    );
};