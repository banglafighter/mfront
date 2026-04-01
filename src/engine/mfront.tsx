import MPageEngine from "./mpage-engine";
import {BootProps} from "../data/boot-props";
import {createApp} from "../mf/create-app";
import {useAppContext} from "../hook/use-app-context";


export const MFront = {

    boot({viewHolder, registry}: BootProps) {
        const {setConfig, setUiAction} = useAppContext.get()
        setConfig({...registry.config})
        setUiAction({...registry.adapter.setUIAdapter().action})
        return createApp(<MPageEngine
            registry={registry}
        />, viewHolder)
    }
}