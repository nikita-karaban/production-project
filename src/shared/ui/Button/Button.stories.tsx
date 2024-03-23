import type {Meta, StoryObj} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import {Button, ThemeButtonEnum} from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Button',
    },
} satisfies Meta<typeof Button>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Primary: StoryType = {};

export const Clear: StoryType = {
    args: {
        theme: ThemeButtonEnum.CLEAR,
    },
};

export const Outline: StoryType = {
    args: {
        theme: ThemeButtonEnum.OUTLINE,
    },
};

export const OutlineDark: StoryType = {
    ...Outline,
    decorators: [themeDecorator(ThemeEnum.DARK)],
};
