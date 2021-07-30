import type { NextPageContext, Redirect } from 'next';
import { NextRouter } from 'next/router';
import React, { ComponentType, ReactNode } from 'react';
import { PreloadedQuery } from 'react-relay/hooks';
import { Environment, GraphQLTaggedNode, OperationType } from 'relay-runtime';
export declare type WiredProps<P extends {} = {}, Q extends OperationType = OperationType> = P & {
    CSN: boolean;
    preloadedQuery: PreloadedQuery<Q>;
};
export interface WiredOptions<Props extends WiredProps, ServerSideProps = {}> {
    /** Fallback rendered when the page suspends. */
    fallback?: ReactNode;
    variablesFromContext?: (ctx: NextPageContext | NextRouter) => Props['preloadedQuery']['variables'];
    /** Called when creating a Relay environment on the client. Should be idempotent. */
    createClientEnvironment: () => Environment;
    /** Props passed to the component when rendering on the client. */
    clientSideProps?: (ctx: NextPageContext) => void | {
        redirect: Redirect;
    };
    /** Called when creating a Relay environment on the server. */
    createServerEnvironment: (ctx: NextPageContext, props: ServerSideProps) => Promise<Environment>;
    /** Props passed to the component when rendering on the server. */
    serverSideProps?: (ctx: NextPageContext) => Promise<ServerSideProps | {
        redirect: Redirect;
    }>;
    ErrorComponent?: React.ComponentType<any>;
}
export declare function Wire<Props extends WiredProps, ServerSideProps>(Component: ComponentType<Props>, query: GraphQLTaggedNode, opts: WiredOptions<Props, ServerSideProps>): {
    (props: Props): JSX.Element;
    getInitialProps: (ctx: NextPageContext) => Promise<{
        __wired__server__context: {};
    } | {
        __wired__client__context?: undefined;
    } | {
        __wired__client__context: {};
    }>;
};
