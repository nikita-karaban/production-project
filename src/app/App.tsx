import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

export function App(): JSX.Element {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback="loading">
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}