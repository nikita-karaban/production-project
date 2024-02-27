import {ThemeEnum, useTheme} from 'app/providers/ThemeProvider';
import {PropsWithChildren} from 'react';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';

import * as styles from './ThemeSwitcher.scss';

type ThemeSwitcherPropsType = PropsWithChildren<{
    readonly className?: string;
}>;

export function ThemeSwitcher(props: ThemeSwitcherPropsType): JSX.Element {
    const {className, children} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button className={classNames(styles.ThemeSwitcher, className)} onClick={toggleTheme}>
            {theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}

            {children}
        </Button>
    );
}
