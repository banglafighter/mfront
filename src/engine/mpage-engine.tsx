import MRegistry from "../structure/mregistry";
import {UIAdapterProvider} from "mfront-ui";
import {MmReactSuspense} from "mmcore";
import {McRouterProvider} from "mfront-core";
import {useI18n} from "./../libsfea/mf-i18n";


export default function MPageEngine({registry}: { registry: MRegistry }) {
    useI18n();
    return (
        <>
            <UIAdapterProvider adapter={registry.adapter.setUIAdapter()}>
                <MmReactSuspense fallback={registry.adapter.setSuspense()}>
                    <McRouterProvider router={registry.route.getRouteMapping()}/>
                </MmReactSuspense>
                {registry.adapter.setCentralUI()}
            </UIAdapterProvider>
        </>
    )
}