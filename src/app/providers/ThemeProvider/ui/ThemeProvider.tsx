import { PropsWithChildren, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, ThemeEnum } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeEnum || ThemeEnum.LIGHT;

export default function ThemeProvider(props: PropsWithChildren<{}>) {
    const {children} = props;
    const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

    const defaultContextValue = useMemo(() => (
        {
            theme,
            setTheme,
        }
    ), [theme])


    return (
        <ThemeContext.Provider
            value={defaultContextValue}
        >
            {children}
        </ThemeContext.Provider>
    )
}