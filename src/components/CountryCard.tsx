import '../styles/CountryCard.scss';

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
            <div className='cards-text'>
                <h2>{name}</h2>
                <p><b>Population:</b> {population}</p>
                <p><b>Region:</b> {region}</p>
                <p><b>Capital:</b> {capital}</p>
            </div>
        </div>
    )
}