import {Component,ErrorInfo, ReactNode, Suspense} from 'react';
import {ErrorPage} from 'widgets/ErrorPage';

interface ErrorBoundaryProps {
    readonly children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static getDerivedStateFromError(): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return {hasError: true};
    }

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render(): ReactNode {
        const {hasError} = this.state;
        const {children} = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            );
        }

        return children;
    }
}
