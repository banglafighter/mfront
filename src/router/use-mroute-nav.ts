import {mcRouterUseNavigate, mcRouterUseParams, mcRouterUseSearchParams} from "mfront-core";
import {mmReactUseMemo} from "mmcore";

interface NavigateOptions {
    replace?: boolean
    state?: any;
}


interface MRouteNavProps {
    navigate: (to: string, options?: NavigateOptions) => void;
    urlParams: any
    queryParams: any
}

export function useRouteNav(): MRouteNavProps {
    const [searchParams] = mcRouterUseSearchParams();
    const navigate = mcRouterUseNavigate()

    const queryParams = mmReactUseMemo(
        () => Object.fromEntries(searchParams.entries()),
        [searchParams],
    );

    return {
        urlParams: mcRouterUseParams(),
        navigate,
        queryParams
    }
}