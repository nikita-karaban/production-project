import {Meta, StoryObj} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import {ThemeSwitcher} from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Light: StoryType = {};

export const Dark: StoryType = {
    decorators: [themeDecorator(ThemeEnum.DARK)],
};
