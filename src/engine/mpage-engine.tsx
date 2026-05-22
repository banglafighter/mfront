import MRegistry from "../structure/mregistry";
import {MFrontAdapterData, MFrontAdapterProvider} from "mfront-ui";
import {MmReactSuspense} from "mmcore";
import {McRouterProvider} from "mfront-core";


export default function MPageEngine({registry}: { registry: MRegistry }) {
    const adapter: MFrontAdapterData = {
        uiAdapterData: registry.adapter.setUIAdapter()
    }

    return (
        <>
            <MFrontAdapterProvider adapter={adapter}>
                <MmReactSuspense fallback={registry.adapter.setSuspense()}>
                    <McRouterProvider router={registry.route.getRouteMapping()}/>
                </MmReactSuspense>
                {registry.adapter.setCentralUI()}
            </MFrontAdapterProvider>
        </>
    )
}