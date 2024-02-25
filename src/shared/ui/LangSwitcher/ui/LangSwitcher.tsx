import { classNames } from "shared/lib/classNames/classNames";

import * as styles from "./LangSwitcher.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButtonEnum } from "shared/ui/Button/Button";

type LangSwitcherPropsType = {
  className?: string;
};

export function LangSwitcher(props: LangSwitcherPropsType) {
  const { className } = props;
  const { t, i18n } = useTranslation();

  function toggle() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return (
    <Button
      className={classNames(styles.LangSwitcher, className)}
      theme={ThemeButtonEnum.CLEAR}
      onClick={toggle}
    >
      {t("language")}
    </Button>
  );
}
