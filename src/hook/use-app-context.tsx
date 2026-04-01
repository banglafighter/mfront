import {MConfig, MConfigDefault} from "../structure/mconfig";
import {UIActionSpec} from "@mfront/ui";
import {mmCreateStore} from "mmcore";


type ContextDefinition = {
    config: MConfig;
    setConfig: (newConfig: Partial<MConfig>) => void;
    uiAction?: UIActionSpec;
    setUiAction: (action: Partial<UIActionSpec>) => void;
};

export const useAppContext = mmCreateStore<ContextDefinition>((set) => ({
    config: new MConfigDefault(),
    setConfig: (newConfig: any) => set((state: any) => ({
            config: {...state.config, ...newConfig}
        })
    ),
    setUiAction: (action: Partial<UIActionSpec>) => set((state: any) => ({
            uiAction: {...state.uiAction, ...action}
        })
    ),
}))