import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense} from "react";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./utils/classNames/classNames";

export function App(): JSX.Element {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', theme)}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Main Page</Link>
            <Link to={'/about'}>About Page</Link>

            <Suspense fallback={<p><i>Loading...</i></p>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync/>}/>

                    <Route path="/" element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    )
}