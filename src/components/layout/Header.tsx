import { BsFillMoonFill, BsMoon } from 'react-icons/bs';
import {Theme} from './Layout';
import '../../styles/Header.scss';

type Props = {
    theme: Theme;
    handleTheme: () => void;
}

export const Header = ({theme, handleTheme}: Props) => {
    const icon = theme === 'light' 
        ? <BsMoon /> 
        : <BsFillMoonFill />;

    return (
        <header>
            <div className={"header-content"}>
                <h1>Where in the world?</h1>
                <button onClick={handleTheme}>{icon} {theme} Theme</button>
            </div>
        </header>
    )
} 