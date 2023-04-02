import './CountryCard.css';

type Props = {
    name: string;
    capital: string;
    region: string; 
    population: number;
    img: string;
}

export const CountryCard = ({name, capital, region, population, img}: Props) => {
    return (
        <div className="country-card">
            <div className="country-card-img-container">
                <img src={img} alt="country-flag" />
            </div>
            <div>
                <h2>{name}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p>Capital: {capital}</p>
            </div>
        </div>
    )
}