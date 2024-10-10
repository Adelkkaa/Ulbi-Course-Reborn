import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';

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
    theme: 'primary',
};

export const DarkPrimary = Template.bind({});

DarkPrimary.args = {
    children: 'Text',
    theme: 'primary',
};

DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'Text',
    theme: 'secondary',
};

export const DarkSecondary = Template.bind({});

DarkSecondary.args = {
    children: 'Text',
    theme: 'secondary',
};

DarkSecondary.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});

Red.args = {
    children: 'Text',
    theme: 'red',
};

export const RedDark = Template.bind({});

RedDark.args = {
    children: 'Text',
    theme: 'red',
};

RedDark.decorators = [ThemeDecorator(Theme.DARK)];
