import {Suspense, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button} from 'shared/ui/Button';
import {Modal} from 'shared/ui/Modal';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';

import {AppRouter} from './providers/router';
import {useTheme} from './providers/ThemeProvider';

export function App(): JSX.Element {
    const {theme} = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', theme)} id="app">
            <Suspense fallback="loading">
                <Navbar />

                {/* <Button onClick={() => setIsOpen(!isOpen)}>
                    toggle
                </Button>
                
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    ssdsds
                </Modal> */}

                <div className="content-page">
                    <Sidebar />

                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
