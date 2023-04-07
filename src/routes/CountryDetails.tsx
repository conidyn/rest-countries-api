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
    const [countryDetails, setCountryDetails] = useState<Country | null>(null)

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
                            <img src={countryDetails.flags.png} alt="" />
                        </div>
                        <div className="details-container">
                            <h2>{countryDetails.name}</h2>
                            <div className="details-content">
                                <ul className={"details-infos"}>
                                    <DetailsInfo description={"Native Name"} value={countryDetails.nativeName} />
                                    <DetailsInfo description={"Population"} value={countryDetails.population.toLocaleString("en-US")} />
                                    <DetailsInfo description={"Region"} value={countryDetails.region} />
                                    <DetailsInfo description={"Sub Region"} value={countryDetails.subregion} />
                                    <DetailsInfo description={"Capital"} value={countryDetails.capital || 'No Data'} />
                                    <DetailsInfo description={"Top Level Domain"} value={countryDetails.topLevelDomain} />
                                    <DetailsInfo description={"Currencies"} currencies={countryDetails.currencies} />
                                    <DetailsInfo description={"Languages"} languages={countryDetails.languages} />
                                </ul>
                                <div className={"details-borders"}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}