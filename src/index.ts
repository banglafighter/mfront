import MRoute from "./router/mroute"
import { PageSlot } from "./router/mroute-common"
import {LayoutComponent, PageComponent, RouteData, RoutePage} from "./router/mroute-data"
import {useRouteRequest} from "./router/use-mroute-request"


export type {
    PageComponent,
    LayoutComponent,
    RoutePage,
    RouteData
}

export {
    MRoute,
    useRouteRequest,
    PageSlot,
}