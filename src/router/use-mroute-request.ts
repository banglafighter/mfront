import {mcRouterUseMatches, mcRouterUseParams, mcRouterUseSearchParams} from "mfront-core";

export function useRouteRequest() {
    const [searchParams] = mcRouterUseSearchParams();
    const matches = mcRouterUseMatches();
    const current = matches.at(-1);
    return {
        urlParams: mcRouterUseParams(),
        queryParams: Object.fromEntries(searchParams.entries()),
        routeMeta: current,
    };
}