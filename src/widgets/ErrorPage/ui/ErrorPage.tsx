import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button/Button';

import * as styles from './ErrorPage.scss';

type ErrorPagePropsType = {
    readonly className?: string;
};

export function ErrorPage(props: ErrorPagePropsType): JSX.Element {
    const {className} = props;

    const {t} = useTranslation();

    function reloadPage() {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    }

    return (
        <div className={classNames(styles.ErrorPage, className)}>
            <p>{t('An unexpected error has occurred')}</p>
            <Button onClick={reloadPage}>{t('Upload Page')}</Button>
        </div>
    );
}
