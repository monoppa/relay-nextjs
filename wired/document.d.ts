import type { DocumentContext } from 'next/document';
import { ComponentType } from 'react';
declare type RenderPage = DocumentContext['renderPage'];
declare type RenderPageParam = NonNullable<Parameters<RenderPage>[0]>;
declare type WithoutFunction<T> = T extends (c: infer C) => unknown ? never : T;
declare type RenderPageOptions = WithoutFunction<RenderPageParam>;
declare type AppEnhancer = NonNullable<RenderPageOptions['enhanceApp']>;
export interface WiredDocument {
    enhance: AppEnhancer;
    Script: ComponentType;
}
export declare function createWiredDocument(): WiredDocument;
export {};
