import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import {PageLoader} from 'widgets/PageLoader';

export function AppRouter(): JSX.Element {
    return (
        <Routes>
            {Object.values(routeConfig).map(({element, path}) => (
                <Route
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    }
                    key={path}
                    path={path}
                />
            ))}
        </Routes>
    );
}
