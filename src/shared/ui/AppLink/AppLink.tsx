import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './AppLink.scss';
import { Link, LinkProps } from 'react-router-dom';
import { PropsWithChildren } from 'react';

export enum AppLinkThemeEnum {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type AppLinkPropsType = PropsWithChildren<{
    className?: string;
    theme?: AppLinkThemeEnum;
}> & LinkProps;

export function AppLink(props: AppLinkPropsType) {
    const {
        className, 
        children, 
        to, 
        theme = AppLinkThemeEnum.PRIMARY,
        ...restProps
    } = props

    return (
    <Link 
        to={to} 
        className={classNames(styles.AppLink, className, styles[`AppLink__${theme}`])}
        {...restProps}
    >
        {children}
    </Link>
    )
}