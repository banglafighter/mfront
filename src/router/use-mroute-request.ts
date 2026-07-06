import {mcRouterUseMatches, mcRouterUseParams, mcRouterUseSearchParams} from "mfront-core";
import {mmReactUseMemo} from "mmcore";

export function useRouteRequest() {
    const [searchParams] = mcRouterUseSearchParams();
    const matches = mcRouterUseMatches();
    const current = matches.at(-1);

    const queryParams = mmReactUseMemo(
        () => Object.fromEntries(searchParams.entries()),
        [searchParams],
    );

    return {
        urlParams: mcRouterUseParams(),
        queryParams,
        routeMeta: current,
    };
}

export function useRouteHandle<Handle = unknown>(): Handle | null {
    const matches = mcRouterUseMatches();
    return (matches.at(-1)?.handle as Handle) ?? null;
}