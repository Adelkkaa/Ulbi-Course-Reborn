import React, { ErrorInfo, Suspense } from 'react';
import { PageError } from 'widgets/PageError';

interface IErrorBoundaryProps {
  children: React.ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <Suspense fallback="">
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
