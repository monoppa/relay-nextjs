/// <reference types="node" />
import type { ParsedUrlQuery } from 'querystring';
import type { GraphQLTaggedNode, RecordSource } from 'relay-runtime';
export interface WiredSerializedState {
    records: ReturnType<RecordSource['toJSON']>;
    query: GraphQLTaggedNode;
    variables: ParsedUrlQuery;
}
export declare function getWiredSerializedState(): WiredSerializedState | undefined;
