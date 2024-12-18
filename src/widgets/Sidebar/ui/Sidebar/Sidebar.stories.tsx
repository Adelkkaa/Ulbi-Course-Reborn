import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const NoAuthLight = Template.bind({});
NoAuthLight.args = {};
NoAuthLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({ user: { authData: undefined } })];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {};
NoAuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: undefined } })];

export const AuthLight = Template.bind({});
AuthLight.args = {};
AuthLight.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'admin',
        },
    },
})];

export const AuthDark = Template.bind({});
AuthDark.args = {};
AuthDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'admin',
        },
    },
})];
