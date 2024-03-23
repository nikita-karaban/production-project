import type {Meta, StoryObj} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import {AppLink, AppLinkThemeEnum} from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
        children: 'main page',
    },
} satisfies Meta<typeof AppLink>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Primary: StoryType = {
    args: {
        theme: AppLinkThemeEnum.PRIMARY,
    },
};

export const Secondary: StoryType = {
    args: {
        theme: AppLinkThemeEnum.SECONDARY,
    },
};

export const PrimaryDark: StoryType = {
    ...Primary,
    decorators: [themeDecorator(ThemeEnum.DARK)],
};

export const SecondaryDark: StoryType = {
    ...Secondary,
    decorators: [themeDecorator(ThemeEnum.DARK)],
};
