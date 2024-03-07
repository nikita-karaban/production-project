import {render} from '@testing-library/react';

import {Button, ThemeButtonEnum} from './Button';

describe('Button component', () => {
    test('renders with default props', () => {
        const {getByRole} = render(<Button>CLICK</Button>);
        const button = getByRole('button');

        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('Button');
        expect(button).toHaveTextContent('CLICK');
    });

    test('renders with clear theme', () => {
        const {getByRole} = render(<Button theme={ThemeButtonEnum.CLEAR}>CLICK</Button>);
        const button = getByRole('button');

        expect(button).toHaveClass('Button');
        expect(button).toHaveClass('Button__clear');
    });
});
