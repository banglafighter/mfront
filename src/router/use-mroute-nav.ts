import {mcRouterUseLocation, mcRouterUseNavigate, mcRouterUseParams, mcRouterUseSearchParams} from "mfront-core";
import {mmReactUseMemo} from "mmcore";

interface NavigateOptions {
    replace?: boolean
    state?: any;
}

interface Location {
    pathname: string;
    search: string;
    hash: string;
    key: string;
}


interface MRouteNavProps {
    navigate: (to: string | any, options?: NavigateOptions) => void;
    urlParams: any
    queryParams: any
    location: Location
}

export function useRouteNav(): MRouteNavProps {
    const [searchParams] = mcRouterUseSearchParams();
    const navigate = mcRouterUseNavigate()
    const location = mcRouterUseLocation()

    const queryParams = mmReactUseMemo(
        () => Object.fromEntries(searchParams.entries()),
        [searchParams],
    );

    return {
        urlParams: mcRouterUseParams(),
        navigate,
        queryParams,
        location
    }
}