import { classNames } from 'shared/lib/classNames/classNames';

import * as styles from './Button.scss';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export enum ThemeButtonEnum {
    CLEAR = 'clear'
}

type ButtonPropsType = PropsWithChildren<{
    className?: string;
    theme?: ThemeButtonEnum;
}> & ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonPropsType) {
    const {className, children, theme = ThemeButtonEnum.CLEAR, ...restProps} = props

    return (
    <button className={classNames(styles.Button, styles[`Button__${theme}`], className)} {...restProps}>
        {children}
    </button>
    )
}