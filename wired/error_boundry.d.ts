import React, { Component, PropsWithChildren } from 'react';
declare type WiredErrorBoundryProps = PropsWithChildren<{
    ErrorComponent?: React.ComponentType<any>;
}>;
interface WiredErrorBoundryState {
    hasError: boolean;
}
export declare class WiredErrorBoundry extends Component<WiredErrorBoundryProps, WiredErrorBoundryState> {
    static getDerivedStateFromError(): WiredErrorBoundryState;
    state: {
        hasError: boolean;
    };
    render(): React.ReactNode;
}
export {};
