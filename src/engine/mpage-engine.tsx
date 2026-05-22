import MRegistry from "../structure/mregistry";
import {MmReactSuspense} from "mmcore";
import {McRouterProvider, MFrontAdapterData} from "mfront-core";
import {MFrontAdapterProvider} from "../provider/mfront-adapter-provider";


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