import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import AboutIcon from 'shared/assets/icons/sidebar-about-page.svg';
import MainIcon from 'shared/assets/icons/sidebar-main-page.svg';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {classNames} from 'shared/lib/classNames/classNames';
import {AppLink, AppLinkThemeEnum} from 'shared/ui';
import {Button, ButtonSizeEnum, ThemeButtonEnum} from 'shared/ui/Button';
import {LangSwitcher} from 'shared/ui/LangSwitcher';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';

import * as styles from './Sidebar.scss';

type SidebarPropsType = {
    readonly className?: string;
};

export function Sidebar(props: SidebarPropsType): JSX.Element {
    const {className} = props;
    const {t} = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    function hundleToggle() {
        setCollapsed((previous) => !previous);
    }

    return (
        <div className={classNames(styles.Sidebar, {[styles.Sidebar__collapsed]: collapsed}, className)}>
            <Button
                className={styles.Sidebar_button}
                data-testid="sidebar-toggle"
                onClick={hundleToggle}
                size={ButtonSizeEnum.L}
                square
                theme={ThemeButtonEnum.BACKGROUND_INVERTED}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.Sidebar_items}>
                <AppLink className={styles.Sidebar_link} theme={AppLinkThemeEnum.SECONDARY} to={RoutePath.main}>
                    <MainIcon className={styles.Sidebar_icon} />

                    <span className={styles.Sidebar_text}>{t('main page')}</span>
                </AppLink>

                <AppLink className={styles.Sidebar_link} theme={AppLinkThemeEnum.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={styles.Sidebar_icon} />

                    <span className={styles.Sidebar_text}>{t('about page')}</span>
                </AppLink>
            </div>

            <div className={styles.Sidebar_switchers}>
                <ThemeSwitcher />

                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
}
