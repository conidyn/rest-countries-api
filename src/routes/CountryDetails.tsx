import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { getCountryByNumericCode } from '../helpers';
import { Country } from '../types';
import countries from '../data.json';
import { DetailsInfo } from "../components/DetailsInfo";

export const CountryDetails = () => {
    const { numericCode } = useParams();
    const navigate = useNavigate();
    const [countryDetails, setCountryDetails] = useState<Country | null>(null);
    useEffect(() => {
        if (numericCode) {
            setCountryDetails(getCountryByNumericCode(numericCode, countries))
        }
    }, [numericCode])

    console.log(countryDetails)
    return (
        <div className="country-details-container">
            {countryDetails && (
                <>
                    <div className={"back-btn-container"}>
                        <button className="back-btn" onClick={() => navigate(-1)}>
                            <BsArrowLeft className={"back-btn-icon"} />
                            <p>Back</p>
                        </button>
                    </div>
                    <div className="country-details-content">
                        <div className="flag-container">
                            <img src={countryDetails.flags.png} alt="country-flag" />
                        </div>
                        <div className="details-container">
                            <h2>{countryDetails.name}</h2>
                            <div className="details-content">
                                <ul className={"details-infos"}>
                                    <div className="infos-right">
                                        <DetailsInfo description={"Native Name"} value={countryDetails.nativeName} />
                                        <DetailsInfo description={"Population"} value={countryDetails.population.toLocaleString("en-US")} />
                                        <DetailsInfo description={"Region"} value={countryDetails.region} />
                                        <DetailsInfo description={"Sub Region"} value={countryDetails.subregion} />
                                        <DetailsInfo description={"Capital"} value={countryDetails.capital || 'No Data'} />
                                    </div>
                                    <div className="infos-left">
                                        <DetailsInfo description={"Top Level Domain"} value={countryDetails.topLevelDomain} />
                                        <DetailsInfo description={"Currencies"} currencies={countryDetails.currencies} />
                                        <DetailsInfo description={"Languages"} languages={countryDetails.languages} />
                                    </div>
                                </ul>
                                {countryDetails.bordersName && countryDetails.bordersName.length > 0 && (
                                    <div className="borders-name-container">
                                        <b>Border Countries:</b>
                                        <ul className={"details-borders"}>
                                            {countryDetails.bordersName.map((name, i) => (
                                                <li key={`border-name-${i}`}>
                                                    {name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}