/// <reference types="node" />
import type { ParsedUrlQuery } from 'querystring';
import type { GraphQLTaggedNode } from 'react-relay';
import type { AnyPreloadedQuery } from './types';
export interface WiredServerContext {
    query: GraphQLTaggedNode;
    preloadedQuery: AnyPreloadedQuery;
    variables: ParsedUrlQuery;
}
export declare function createWiredServerContext(value: WiredServerContext): {};
export declare function getWiredServerContext(context: any): WiredServerContext | undefined;
export interface WiredClientContext {
    preloadedQuery: AnyPreloadedQuery;
}
export declare function createWiredClientContext(value: WiredClientContext): {};
export declare function getWiredClientContext(context: any): WiredClientContext | undefined;
export interface WiredErrorContext {
    statusCode: number;
    err?: unknown;
}
