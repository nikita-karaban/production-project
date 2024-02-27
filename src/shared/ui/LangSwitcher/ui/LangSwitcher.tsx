import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ThemeButtonEnum} from 'shared/ui/Button/Button';

import * as styles from './LangSwitcher.scss';

type LangSwitcherPropsType = {
    readonly className?: string;
};

export function LangSwitcher(props: LangSwitcherPropsType): JSX.Element {
    const {className} = props;
    const {t, i18n} = useTranslation();

    function toggle() {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button className={classNames(styles.LangSwitcher, className)} onClick={toggle} theme={ThemeButtonEnum.CLEAR}>
            {t('language')}
        </Button>
    );
}
