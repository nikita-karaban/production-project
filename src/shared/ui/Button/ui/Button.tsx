import {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import * as styles from './Button.scss';

export enum ThemeButtonEnum {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSizeEnum {
    M = 'size__m',
    L = 'size__l',
    XL = 'size__xl',
}

type ButtonPropsType = PropsWithChildren<{
    readonly className?: string;
    readonly theme?: ThemeButtonEnum;
    readonly size?: ButtonSizeEnum;
    readonly square?: boolean;
}> &
    ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonPropsType): JSX.Element {
    const {className, children, theme, square, size = ButtonSizeEnum.M, ...restProps} = props;

    const classes = {
        [styles.Button]: true,
        [styles.Button__square]: square,
        [styles[`Button__${theme}`]]: true,
        [styles[`Button__${size}`]]: true,
    };

    return (
        <button className={classNames(classes, className)} type="button" {...restProps}>
            {children}
        </button>
    );
}
