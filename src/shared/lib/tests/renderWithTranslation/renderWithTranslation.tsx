import {render, RenderResult} from '@testing-library/react';
import {ReactNode} from 'react';
import {I18nextProvider} from 'react-i18next';
import i18ForTest from 'shared/config/i18n/i18nForTest';

export function renderWithTranslation(component: ReactNode): RenderResult {
    return render(<I18nextProvider i18n={i18ForTest}>{component}</I18nextProvider>);
}
