import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => (
    <header className={classNames(cls.navbar, {}, [className])}>
        <ThemeSwitcher />
        <nav className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
                to="/"
            >
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.RED} to="/about">
                О сайте
            </AppLink>
        </nav>
    </header>
);
