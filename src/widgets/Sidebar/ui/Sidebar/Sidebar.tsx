import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './Sidebar.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

type SidebarPropsType = {
    className?: string;
}

export function Sidebar(props: SidebarPropsType) {
    const {className} = props;

    const {t} = useTranslation()

    const [collapsed, setCollapsed] = useState(false);

    function hundleToggle() {
        setCollapsed(prev => !prev)
    }

    return (
    <div className={classNames(styles.Sidebar, {[styles.Sidebar__collapsed]: collapsed}, className)}>
        <button onClick={hundleToggle}>
            {t('switcher')}
        </button>
        <div className={styles.Sidebar_switchers}>
            <ThemeSwitcher />
            <LangSwitcher/>
        </div>
    </div>
    )
}