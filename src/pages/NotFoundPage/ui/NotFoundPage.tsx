import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';

import * as styles from './NotFoundPage.scss';

type NotFondPagePropsType = {
    readonly className?: string;
};

export function NotFoundPage(props: NotFondPagePropsType): JSX.Element {
    const {className} = props;

    const {t} = useTranslation();

    return <div className={classNames(styles.NotFoundPage, className)}>{t('Not Found Page')}</div>;
}
