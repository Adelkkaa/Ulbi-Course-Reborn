import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text, TextTheme } from '@/shared/ui';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

import cls from './LoginForm.module.scss';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}
const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const { t } = useTranslation();

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onSubmitLoginForm = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);

            const username = formData.get('username') as string;
            const password = formData.get('password') as string;

            const result = await dispatch(
                loginByUsername({
                    username,
                    password,
                }),
            );

            if (result.meta.requestStatus === 'fulfilled') {
                onSuccess();
            }
        },
        [dispatch, onSuccess],
    );

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <form
                onSubmit={onSubmitLoginForm}
                className={classNames(cls.LoginForm, {}, [className])}
            >
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text
                        text={t('Вы ввели неверный логин или пароль')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    name="username"
                    autofocus
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите username')}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    name="password"
                    type="text"
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    type="submit"
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </form>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
