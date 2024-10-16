import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('setUsername', () => {
        const state: DeepPartial<ILoginSchema> = {
            username: '',
        };
        expect(loginReducer(state as ILoginSchema, loginActions.setUsername('user')))
            .toEqual({
                username: 'user',
            });
    });

    test('setPassword', () => {
        const state: DeepPartial<ILoginSchema> = {
            password: '',
        };
        expect(loginReducer(state as ILoginSchema, loginActions.setPassword('password')))
            .toEqual({
                password: 'password',
            });
    });
});
