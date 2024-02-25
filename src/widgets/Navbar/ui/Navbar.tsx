import { classNames } from "shared/lib/classNames/classNames";

import * as styles from './Navbar.scss';
import { AppLink, AppLinkThemeEnum } from "shared/ui";
import { useTranslation } from "react-i18next";

type NavbarPropsType = {
    className?: string;
}

export function Navbar(props: NavbarPropsType) {
    const {className} = props;
    const {t} = useTranslation();

  return (
    <div className={classNames(styles.Navbar, className)}>
        <div className={styles.Navbar_links}>
            <AppLink theme={AppLinkThemeEnum.SECONDARY} to={'/'}>{t('main page')}</AppLink>
            <AppLink theme={AppLinkThemeEnum.SECONDARY} to={'/about'}>{t('about page')}</AppLink>
        </div>
    </div>
  )
}



