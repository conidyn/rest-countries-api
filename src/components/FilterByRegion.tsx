import { useState, useMemo } from 'react';
import {IoIosArrowDown} from "react-icons/io";
import { FilterByRegiontType } from '../types';

type Props = {
    handleFilterByRegion: (value: FilterByRegiontType) => void;
    region: FilterByRegiontType;
}

export const FilterByRegion = ({handleFilterByRegion, region}: Props) => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const regions = useMemo<FilterByRegiontType[]>(() => (['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']), []);

    return (
       <div className='filter-region-container'>
         <button className="filter-btn" onClick={() => setShowDropdown(!showDropdown)}>
            <p>Filter by Region: {region}</p>
            <IoIosArrowDown />
        </button>
        {showDropdown && (
            <div className='dropdown-container'>
                <ul>
                    {regions.map((region) => (
                        <li key={region} 
                            onClick={() => {
                                handleFilterByRegion(region);
                                setShowDropdown(!showDropdown);
                            }}
                        >
                            {region}
                        </li>
                    ))}
                </ul>  
            </div>
        )}
       </div>
    )
}