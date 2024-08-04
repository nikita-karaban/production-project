import {fireEvent} from '@testing-library/react';
import {componentRender} from 'shared/lib/tests/componentRender/componentRender';

import {Sidebar} from './Sidebar';

describe('Sidebar', () => {
    test('renders with default state and className', () => {
        const {container} = componentRender(<Sidebar className="custom-class" />);
        const sidebar = container.firstChild;

        expect(sidebar).toHaveClass('Sidebar');
        expect(sidebar).not.toHaveClass('Sidebar__collapsed');
        expect(sidebar).toHaveClass('custom-class');
    });

    test('toggles collapsed state when button is clicked', () => {
        const {getByRole, container} = componentRender(<Sidebar />);
        const button = getByRole('button', {name: '<'});

        fireEvent.click(button);

        expect(container.firstChild).toHaveClass('Sidebar__collapsed');
    });
});
