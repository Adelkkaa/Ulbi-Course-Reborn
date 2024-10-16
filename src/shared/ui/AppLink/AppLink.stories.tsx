import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

export const DarkPrimary = Template.bind({});

DarkPrimary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
};

DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

export const DarkSecondary = Template.bind({});

DarkSecondary.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
};

DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});

Red.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};

export const RedDark = Template.bind({});

RedDark.args = {
    children: 'Text',
    theme: AppLinkTheme.RED,
};

RedDark.decorators = [ThemeDecorator(Theme.DARK)];
