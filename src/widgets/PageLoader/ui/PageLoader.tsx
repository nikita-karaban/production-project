import {classNames} from 'shared/lib/classNames/classNames';
import {Loader} from 'shared/ui/Loader';

import * as styles from './PageLoader.scss';

type PageLoaderPropsType = {
    readonly className?: string;
};

export function PageLoader(props: PageLoaderPropsType): JSX.Element {
    const {className} = props;

    return (
        <div className={classNames(styles.PageLoader, className)}>
            <Loader />
        </div>
    );
}
