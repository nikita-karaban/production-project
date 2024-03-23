import {Meta, StoryObj} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import {Loader} from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Light: StoryType = {};

export const Dark: StoryType = {
    decorators: [themeDecorator(ThemeEnum.DARK)],
};
