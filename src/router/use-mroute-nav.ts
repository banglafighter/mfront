import {mcRouterUseNavigate, mcRouterUseParams} from "mfront-core";

interface NavigateOptions {
    replace?: boolean
    state?: any;
}


interface MRouteNavProps {
    navigate: (to: string, options?: NavigateOptions) => void;
    urlParams: any
}

export function useRouteNav(): MRouteNavProps {
    const navigate = mcRouterUseNavigate()

    return {
        urlParams: mcRouterUseParams(),
        navigate
    }
}