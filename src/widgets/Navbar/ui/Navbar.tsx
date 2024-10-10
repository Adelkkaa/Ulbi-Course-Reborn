import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <nav className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to="/about">
                    {t('О сайте')}
                </AppLink>
            </nav>
        </header>
    );
};
