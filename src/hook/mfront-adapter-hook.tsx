import {mmReactUseContext} from "mmcore";
import {HTTPClient, MFrontAdapterContext, MFrontException} from "mfront-core";


export function useHTTPClient(): HTTPClient {
    const ctx = mmReactUseContext(MFrontAdapterContext)
    if (!ctx || !ctx.httpClient) {
        throw new MFrontException("HTTP Client does not register")
    }
    return ctx.httpClient
}