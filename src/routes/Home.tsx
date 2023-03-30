import { Header } from "../components/Header";
import {CountryCard} from "../components/CountryCard";
import countries from "../data.json";

export const Home = () => {
    console.log(countries);

    return (
        <div>
            <Header />
            {countries.map(country => (
                <CountryCard 
                    name={country.name}
                    population={country.population}
                    region={country.region}
                    capital={country.capital || ''}
                    img={country.flags.png}
                />
            ))}
        </div>
    );
};