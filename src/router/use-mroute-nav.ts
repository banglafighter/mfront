import {mcRouterUseNavigate} from "mfront-core";

interface NavigateOptions {
    replace?: boolean
    state?: any;
}


interface MRouteNavProps {
    navigate: (to: string, options?: NavigateOptions) => void;
}

export function useRouteNav(): MRouteNavProps {
    const navigate = mcRouterUseNavigate()

    return {
        navigate
    }
}