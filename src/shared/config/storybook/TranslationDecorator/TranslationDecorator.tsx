import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18nForTests';

export const TranslationDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback={null}>
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
);
