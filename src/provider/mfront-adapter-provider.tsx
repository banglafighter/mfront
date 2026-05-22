import {MFrontAdapterContext, MFrontAdapterData} from "mfront-core";


export function MFrontAdapterProvider({adapter, children}: { adapter: MFrontAdapterData, children: any }) {
    return (
        <MFrontAdapterContext.Provider value={adapter}>
            {children}
        </MFrontAdapterContext.Provider>
    )
}
