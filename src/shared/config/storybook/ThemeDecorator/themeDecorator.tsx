import {StoryFn} from '@storybook/react';
import {ThemeEnum} from 'app/providers/ThemeProvider';

// eslint-disable-next-line func-style, react/display-name, @typescript-eslint/explicit-module-boundary-types
export const themeDecorator = (theme: ThemeEnum) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
