import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    AppLink,
    AppLinkTheme,
    Button, ButtonTheme,
    Text,
    TextTheme,
} from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsOpenAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpenAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text
                    className={cls.appName}
                    title={t('Ulbi TV App')}
                    theme={TextTheme.INVERTED}
                />
                <AppLink
                    to={RoutePath.article_create}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onLogout}
                >
                    {t('Выйти')}
                </Button>
            </header>
        );
    }
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            {isOpenAuthModal && (
                <LoginModal
                    isOpen={isOpenAuthModal}
                    onClose={onCloseModal}
                />
            )}
        </header>
    );
};
