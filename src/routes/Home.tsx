import {CountryCard} from "../components/CountryCard";
import countries from "../data.json";
import '../styles/index.css'

export const Home = () => {
    return (
        <div className={"dark-theme page-container"}>
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
    );
};