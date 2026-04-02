import {lwReactCreateRoot} from "mfront-core";

export function createApp(App: any, container: HTMLElement | null) {
    if (container) {
        const root = lwReactCreateRoot(container)
        root.render(App)
    }
}
