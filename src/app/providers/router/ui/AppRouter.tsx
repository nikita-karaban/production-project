import {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';

export function AppRouter(): JSX.Element {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <div className="page-wrapper">{element}</div>
                            </Suspense>
                        }
                        key={path}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
