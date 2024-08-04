import type {Meta, StoryObj} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/ThemeDecorator/themeDecorator';

import {Button, ButtonSizeEnum, ThemeButtonEnum} from './Button';

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

export const OutlineSizeM: StoryType = {
    args: {
        ...Outline.args,
        size: ButtonSizeEnum.M,
    },
};

export const OutlineSizeL: StoryType = {
    args: {
        ...Outline.args,
        size: ButtonSizeEnum.L,
    },
};

export const OutlineSizeXL: StoryType = {
    args: {
        ...Outline.args,
        size: ButtonSizeEnum.XL,
    },
};

export const OutlineDark: StoryType = {
    ...Outline,
    decorators: [themeDecorator(ThemeEnum.DARK)],
};

export const Background: StoryType = {
    args: {
        theme: ThemeButtonEnum.BACKGROUND,
    },
};

export const BackgroundInverted: StoryType = {
    args: {
        theme: ThemeButtonEnum.BACKGROUND_INVERTED,
    },
};

export const Square: StoryType = {
    args: {
        children: '>',
        theme: ThemeButtonEnum.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SquareSizeL: StoryType = {
    args: {
        ...Square.args,
        size: ButtonSizeEnum.L,
    },
};

export const SquareSizeM: StoryType = {
    args: {
        ...Square.args,
        size: ButtonSizeEnum.M,
    },
};

export const SquareSizeXL: StoryType = {
    args: {
        ...Square.args,
        size: ButtonSizeEnum.XL,
    },
};
