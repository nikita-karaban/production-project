import {StoryFn} from '@storybook/react';
import {BrowserRouter} from 'react-router-dom';

// eslint-disable-next-line func-style, react/display-name, @typescript-eslint/explicit-module-boundary-types,
const routerDecorator = (StoryComponent: StoryFn) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);

// ts-prune-ignore-next
export {routerDecorator};
