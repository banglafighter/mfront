import { MConfig } from "./mconfig";
import MAdapter from "./madapter";
import MRoute from "../router/mroute";


export default interface MRegistry {
    config: MConfig
    adapter: MAdapter
    route: MRoute
}