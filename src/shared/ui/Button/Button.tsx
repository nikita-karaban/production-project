import {ButtonHTMLAttributes, PropsWithChildren} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import * as styles from './Button.scss';

export enum ThemeButtonEnum {
    CLEAR = 'clear',
}

type ButtonPropsType = PropsWithChildren<{
    readonly className?: string;
    readonly theme?: ThemeButtonEnum;
}> &
    ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonPropsType): JSX.Element {
    const {className, children, theme = ThemeButtonEnum.CLEAR, ...restProps} = props;

    return (
        <button
            className={classNames(styles.Button, styles[`Button__${theme}`], className)}
            type="button"
            {...restProps}
        >
            {children}
        </button>
    );
}
