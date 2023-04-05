import { useNavigate } from 'react-router-dom';
import '../styles/CountryCard.scss';

type Props = {
    name: string;
    capital: string;
    region: string;
    population: number;
    img: string;
    numericCode: string;
}

export const CountryCard = ({ name, capital, region, population, img, numericCode }: Props) => {
    const navigate = useNavigate();

    return (
        <div className="country-card" onClick={() => navigate(`country/${numericCode}`)}>
            <div className="country-card-img-container">
                <img src={img} alt="country-flag" />
            </div>
            <div className='cards-text'>
                <h2>{name}</h2>
                <p><b>Population:</b> {population.toLocaleString("en-US")}</p>
                <p><b>Region:</b> {region}</p>
                <p><b>Capital:</b> {capital}</p>
            </div>
        </div>
    )
}