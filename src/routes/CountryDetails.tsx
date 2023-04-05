import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getCountryByNumericCode} from '../helpers';
import {Country} from '../types';
import countries from '../data.json';

export const CountryDetails = () => {
    const {numericCode} = useParams();
    const [countryDetails, setCountryDetails] = useState<Country | {}>({})

    useEffect(() => {
        if (numericCode) {
            setCountryDetails(getCountryByNumericCode(numericCode, countries))
        }
    }, [numericCode])

    console.log(countryDetails)
    return (
        <div>
            {numericCode}
        </div>
    )
}