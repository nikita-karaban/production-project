import {Meta, StoryObj} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import {Navbar} from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widget/Navbar',
    component: Navbar,
    tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Light: StoryType = {};

export const Dark: StoryType = {
    decorators: [themeDecorator(ThemeEnum.DARK)],
};
