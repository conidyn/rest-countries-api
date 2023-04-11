import { useState, useMemo } from 'react';
import {IoIosArrowDown} from "react-icons/io";

export const FilterByRegion = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const regions = useMemo(() => (['Africa', 'America', 'Asia', 'Europe', 'Oceania']), []);
    return (
       <div className='filter-region-container'>
         <button className="filter-btn" onClick={() => setShowDropdown(!showDropdown)}>
            <p>Filter by Region</p>
            <IoIosArrowDown />
        </button>
        {showDropdown && (
            <div className='dropdown-container'>
                <ul>
                    {regions.map((region) => (
                        <li key={region}>{region}</li>
                    ))}
                </ul>  
            </div>
        )}
       </div>
    )
}