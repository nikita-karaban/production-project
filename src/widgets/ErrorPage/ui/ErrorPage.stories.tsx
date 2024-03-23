import {Meta, StoryObj} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import {ErrorPage} from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ErrorPage>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Light: StoryType = {};

export const Dark: StoryType = {
    decorators: [themeDecorator(ThemeEnum.DARK)],
};
