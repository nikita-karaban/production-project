import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './ThemeSwitcher.scss';
import { ThemeEnum, useTheme } from 'app/providers/ThemeProvider';
import { PropsWithChildren } from 'react';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button/Button';

type ThemeSwitcherPropsType = PropsWithChildren<{
    className?: string;
}>

export function ThemeSwitcher(props: ThemeSwitcherPropsType) {
    const {className, children} = props
    const {theme, toggleTheme} = useTheme()

    return (
        <Button className={classNames(styles.ThemeSwitcher, className)} onClick={toggleTheme}>
            {theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}
            {children}
        </Button>
    )
}