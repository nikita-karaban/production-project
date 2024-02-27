import {PropsWithChildren} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';

import * as styles from './AppLink.scss';

export enum AppLinkThemeEnum {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type AppLinkPropsType = PropsWithChildren<{
    readonly className?: string;
    readonly theme?: AppLinkThemeEnum;
}> &
    LinkProps;

export function AppLink(props: AppLinkPropsType): JSX.Element {
    const {className, children, to, theme = AppLinkThemeEnum.PRIMARY, ...restProps} = props;

    return (
        <Link className={classNames(styles.AppLink, className, styles[`AppLink__${theme}`])} to={to} {...restProps}>
            {children}
        </Link>
    );
}
