import {UIComponent} from "mmcore";

export type PageComponent<P = any> = UIComponent<P>
export type LayoutComponent<P = any> = UIComponent<P>


export interface RoutePage {
    url: string
    pageKey?: string
    component: PageComponent
    handle?: unknown
}

export interface RouteData {
    layoutName: string
    layout: LayoutComponent
    pages?: Array<RoutePage>
}