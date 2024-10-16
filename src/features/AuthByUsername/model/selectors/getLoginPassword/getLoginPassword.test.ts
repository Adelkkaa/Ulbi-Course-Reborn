import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'hello',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toBe('hello');
    });
    test('should return empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
