import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';

import * as styles from './Navbar.scss';

type NavbarPropsType = {
    readonly className?: string;
};

export function Navbar(props: NavbarPropsType): JSX.Element {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(styles.Navbar, className)}>
            <div className={styles.Navbar_links}>/</div>
        </div>
    );
}
