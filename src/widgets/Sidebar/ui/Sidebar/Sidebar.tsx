import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
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
            <button onClick={hundleToggle} type="button">
                {t('switcher')}
            </button>

            <div className={styles.Sidebar_switchers}>
                <ThemeSwitcher />

                <LangSwitcher />
            </div>
        </div>
    );
}
