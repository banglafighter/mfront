import {LayoutComponent, PageComponent, RouteData, RoutePage} from "./mroute-data";
import {DefaultErrorPage, DefaultUnauthorizedPage} from "./mroute-common";
import {createMcReactRoute} from "mfront-core";
import {MFrontConst} from "../common/mfront-const";

const RequiredLayoutName = {
    privateLayout: "private",
    publicLayout: "public",
    defaultLayout: "default",
    authLayout: "auth",
}

function getReactRouterMapping(routers: Map<string, RouteData>, errorPage: PageComponent, notFoundPage: PageComponent, unauthorizedPage: PageComponent, basename?: string | null) {
    let mappings: any = []
    routers.forEach((data, layoutName) => {
        const Layout = data.layout
        let routeMap: any = {
            element: <Layout/>,
            children: []
        }
        for (const page of data.pages ?? []) {
            const FunctionToElement: any = page.component
            routeMap.children.push({
                path: page.url,
                element: <FunctionToElement/>
            })
        }
        if (data.pages?.length) {
            mappings.push(routeMap)
        }
    })

    const ErrorPage = errorPage
    const NotFoundPage = notFoundPage
    const UnauthorizedPage = unauthorizedPage
    mappings.push(
        {
            errorElement: <ErrorPage/>,
            children: [
                {path: MFrontConst.unauthorizedUrl, element: <UnauthorizedPage/>},
                {path: "*", element: <NotFoundPage/>},
            ]
        }
    )
    const options: Record<string, unknown> = {}
    if (basename) {
        options.basename = basename
    }
    return createMcReactRoute(mappings, options)
}

export default abstract class MRoute {
    private pageAndLayout: Map<string, RouteData> = new Map<string, RouteData>()

    abstract setPublicLayout(): LayoutComponent

    abstract setPrivateLayout(): LayoutComponent

    abstract setDefaultLayout(): LayoutComponent

    abstract setNotFoundPage(): PageComponent

    abstract registerRoute(route: MRoute): void

    setUnauthorizedPage(): PageComponent {
        return DefaultUnauthorizedPage
    }

    setAuthLayout(): LayoutComponent | null {
        return null
    }

    setOtherLayout(): void {}

    setBaseUrl(): string | null {
        return null
    }

    setErrorPage(): PageComponent {
        return DefaultErrorPage
    }

    setLayout(layoutName: string, layout: any) {
        if (!this.pageAndLayout.has(layoutName)) {
            this.pageAndLayout.set(layoutName, {
                layout: layout,
                layoutName: layoutName,
                pages: []
            })
        }
        return this
    }

    initAllLayout() {
        const publicLayout: any = this.setPublicLayout()
        if (publicLayout) {
            this.setLayout(RequiredLayoutName.publicLayout, publicLayout)
        }

        const privateLayout: any = this.setPrivateLayout()
        if (privateLayout) {
            this.setLayout(RequiredLayoutName.privateLayout, privateLayout)
        }

        const defaultLayout: any = this.setDefaultLayout()
        if (defaultLayout) {
            this.setLayout(RequiredLayoutName.defaultLayout, defaultLayout)
        }

        const authLayout: any = this.setAuthLayout()
        if (authLayout) {
            this.setLayout(RequiredLayoutName.authLayout, authLayout)
        }

        this.setOtherLayout()
    }

    addPrivateRoute(page: RoutePage) {
        this.addRoute(RequiredLayoutName.privateLayout, page)
    }

    addPublicRoute(page: RoutePage) {
        this.addRoute(RequiredLayoutName.publicLayout, page)
    }

    addDefaultRoute(page: RoutePage) {
        this.addRoute(RequiredLayoutName.defaultLayout, page)
    }

    addAuthRoute(page: RoutePage) {
        this.addRoute(RequiredLayoutName.authLayout, page)
    }

    addRoute(layoutName: string, page: RoutePage) {
        let layout = this.pageAndLayout.get(layoutName)
        if (!layout) {
            layout = this.pageAndLayout.get(RequiredLayoutName.defaultLayout)
        }

        if (layout) {
            layout.pages ??= []
            layout.pages.push(page)
        }
        return this
    }

    getRouteMapping() {
        this.initAllLayout()
        this.registerRoute(this)
        return getReactRouterMapping(
            this.pageAndLayout,
            this.setErrorPage(),
            this.setNotFoundPage(),
            this.setUnauthorizedPage(),
            this.setBaseUrl()
        )
    }

}