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
    mmReactUseRef as useRef,
    MmReactFragment as UIFragment,
    mmReactForwardRef as forwardRef,
    mmReactUseImperativeHandle as useImperativeHandle,
    mmReactCloneElement as uiCloneElement,
    mmReactCreateContext as createContext,
    mmReactUseEffect as useEffect,
    mmReactUseCallback as useCallback,
    mmReactSVGProps as SVGProps,
} from "mmcore";
import MRegistry from "./structure/mregistry";
import {ENV_KEY, envValue, MConfig } from "./structure/mconfig";
import MAdapter from "./structure/madapter";
import {UINode, UIComponent, mmReactLazy as loadPage} from "mmcore";
import { useRouteNav } from "./router/use-mroute-nav";
import { useHTTPClient } from "./hook/mfront-adapter-hook";
import { MFrontConst } from "./common/mfront-const";
export * from "./libsfea/mf-i18n"
export * from "mmcore-ui"
export * from "mmcore"

export type {
    PageComponent,
    LayoutComponent,
    RoutePage,
    RouteData,
    MRegistry,
    MConfig,
    UINode,
    UIComponent,
    SVGProps
}

export {
    MRoute,
    useRouteRequest,
    PageSlot,
    useContext,
    useState,
    useRef,
    useImperativeHandle,
    forwardRef,
    useAppContext,
    createApp,
    MFront,
    MAdapter,
    loadPage,
    envValue,
    ENV_KEY,
    useRouteNav,
    useHTTPClient,
    UIFragment,
    uiCloneElement,
    createContext,
    useEffect,
    useCallback,
    MFrontConst
}