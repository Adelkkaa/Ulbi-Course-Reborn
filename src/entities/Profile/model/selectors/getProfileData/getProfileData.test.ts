import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });

    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    username: 'admin',
                },
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual({
            username: 'admin',
        });
    });
});
