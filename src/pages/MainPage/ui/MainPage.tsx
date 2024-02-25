import { useTranslation } from "react-i18next";

export default function MainPage():JSX.Element {
    const {t} = useTranslation()

    return ( <>
        {t('main page')}
    </> );
}
