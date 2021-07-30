import type { AppProps } from 'next/app';
import type { Environment } from 'react-relay';
import type { WiredProps } from './component';
import type { AnyPreloadedQuery } from './types';
export declare function getWiredProps(pageProps: AppProps['pageProps'], initialPreloadedQuery: AnyPreloadedQuery | null): Partial<WiredProps>;
export declare function getInitialPreloadedQuery(opts: {
    createClientEnvironment: () => Environment;
}): AnyPreloadedQuery | null;
