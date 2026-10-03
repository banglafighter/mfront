import MPageEngine from "./mpage-engine";
import {BootProps} from "../data/boot-props";
import {createApp} from "../mf/create-app";
import {useAppContext} from "../hook/use-app-context";


export const MFront = {

    boot({viewHolder, registry}: BootProps) {
        const {setConfig, setUiAction, setStaticConfig} = useAppContext.get()
        setConfig({...registry.config})
        if (registry.adapter.setUIAdapter()) {
            setUiAction({...registry.adapter.setUIAdapter().action})
        }
        if (registry.adapter.setStaticConfig()) {
            setStaticConfig({...registry.adapter.setStaticConfig()})
        }
        return createApp(<MPageEngine
            registry={registry}
        />, viewHolder)
    }
}