import { MFront } from "./engine/mfront";
import {useAppContext} from "./hook/use-app-context";
import { createApp } from "./mf/create-app";
import MRoute from "./router/mroute"
import {PageSlot} from "./router/mroute-common"
import {LayoutComponent, PageComponent, RouteData, RoutePage} from "./router/mroute-data"
import {useRouteRequest} from "./router/use-mroute-request"
import {
    mmReactUseContext as useContext,
    mmReactUseState as useState,
    mmReactUseRef as useRef
} from "mmcore";
import MRegistry from "./structure/mregistry";
import { MConfig } from "./structure/mconfig";
import MAdapter from "./structure/madapter";
import {UINode, UIComponent, mmReactLazy as loadPage} from "mmcore";

export type {
    PageComponent,
    LayoutComponent,
    RoutePage,
    RouteData,
    MRegistry,
    MConfig,
    UINode,
    UIComponent
}

export {
    MRoute,
    useRouteRequest,
    PageSlot,
    useContext,
    useState,
    useRef,
    useAppContext,
    createApp,
    MFront,
    MAdapter,
    loadPage,
}