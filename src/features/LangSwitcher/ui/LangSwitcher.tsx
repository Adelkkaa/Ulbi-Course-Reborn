import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface ThemeSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }


  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toggleLang}
    >
      {t("Язык")}
    </Button>
  );
};
