import {UINode} from "mmcore";
import {UIAdapterData} from "mfront-ui";

export default abstract class MAdapter {
    abstract setCentralUI(): UINode
    abstract setSuspense(): UINode
    abstract setUIAdapter(): UIAdapterData
}