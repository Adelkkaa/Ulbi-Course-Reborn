import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
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
