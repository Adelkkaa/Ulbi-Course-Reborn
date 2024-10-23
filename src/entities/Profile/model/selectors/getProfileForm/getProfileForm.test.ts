import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });

    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {
                    username: 'admin',
                },
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual({
            username: 'admin',
        });
    });
});
