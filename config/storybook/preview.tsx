import '../../src/app/css/root.scss';

import type {Preview} from '@storybook/react';

import {ThemeEnum} from '../../src/app/providers/ThemeProvider';
import {routerDecorator} from '../../src/shared/config/storybook/RouterDecorator/routerDecorator';
import {themeDecorator} from '../../src/shared/config/storybook/ThemeDecorator/themeDecorator';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
    },
    decorators: [themeDecorator(ThemeEnum.LIGHT), routerDecorator],
};

export default preview;
