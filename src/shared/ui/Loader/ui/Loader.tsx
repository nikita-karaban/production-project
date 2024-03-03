import {classNames} from 'shared/lib/classNames/classNames';

import * as styles from './Loader.scss';

type LoaderPropsType = {
    readonly className?: string;
};

export function Loader(props: LoaderPropsType): JSX.Element {
    const {className} = props;

    return (
        <div className={classNames(styles.Loader, className)}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
}
