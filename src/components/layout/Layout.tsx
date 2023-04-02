import {useState, PropsWithChildren} from "react";
import { Header } from "./Header";

export type Theme = 'light' | 'dark';

export const Layout = ({children}: PropsWithChildren) => {
    const [theme, setTheme] = useState<Theme>('light');

    const handleTheme = () => (setTheme((prev) =>  prev === "light" ? 'dark': 'light'));

    return (
        <div className={`layout ${theme}-mode`}>
            <Header theme={theme} handleTheme={handleTheme}/>
            {children}
        </div>
    )
}