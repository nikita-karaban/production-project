import {Meta, StoryObj} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import {NotFoundPage} from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type StoryType = StoryObj<typeof meta>;

export const Light: StoryType = {};

export const Dark: StoryType = {
    decorators: [themeDecorator(ThemeEnum.DARK)],
};
