import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { getCountryByNumericCode } from '../helpers';
import { Country } from '../types';
import countries from '../data.json';

export const CountryDetails = () => {
    const { numericCode } = useParams();
    const navigate = useNavigate();
    const [countryDetails, setCountryDetails] = useState<Country | {}>({})

    useEffect(() => {
        if (numericCode) {
            setCountryDetails(getCountryByNumericCode(numericCode, countries))
        }
    }, [numericCode])

    console.log(countryDetails)
    return (
        <div className="country-details-container">
            {Object.keys(countryDetails).length > 0 && (
                <>
                    <div>
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

                        </div>
                    </div>
                </>
            )}
        </div>
    )
}