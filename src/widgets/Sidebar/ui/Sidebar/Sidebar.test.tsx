import {fireEvent} from '@testing-library/react';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import {Sidebar} from './Sidebar';

describe('Sidebar', () => {
    test('renders with default state and className', () => {
        const {container} = renderWithTranslation(<Sidebar className="custom-class" />);
        const sidebar = container.firstChild;

        expect(sidebar).toHaveClass('Sidebar');
        expect(sidebar).not.toHaveClass('Sidebar__collapsed');
        expect(sidebar).toHaveClass('custom-class');
    });

    test('toggles collapsed state when button is clicked', () => {
        const {getByRole, container} = renderWithTranslation(<Sidebar />);
        const button = getByRole('button', {name: 'switcher'});

        fireEvent.click(button);

        expect(container.firstChild).toHaveClass('Sidebar__collapsed');
    });
});
