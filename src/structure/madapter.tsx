import {UINode} from "mmcore";
import {UIAdapterData} from "mfront-ui";
import {HTTPClient} from "mfront-core";

export default abstract class MAdapter {
    abstract setCentralUI(): UINode
    abstract setSuspense(): UINode
    abstract setUIAdapter(): UIAdapterData
    abstract setHTTPClient(): HTTPClient
}