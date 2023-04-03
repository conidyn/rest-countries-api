import { AiOutlineSearch } from 'react-icons/ai';

type Props = {
    handleChange: (value: string) => void,
    value: string,
};

export const SearchBar = ({handleChange, value}: Props) => {

    return (
        <div className="search-bar-container">
            <div className='search-icon-container'>
                <AiOutlineSearch className={"search-icon"}/>
            </div>
            <input 
                type="text" 
                placeholder="Search for a country..." 
                value={value} 
                onChange={(e) => handleChange(e.target.value)} 
            />
        </div>
    )
}