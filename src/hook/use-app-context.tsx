import {MConfig, MConfigDefault} from "../structure/mconfig";
import {UIActionSpec} from "mfront-ui";
import {mmCreateStore, MStore} from "mmcore";


type ContextDefinition = {
    config: MConfig;
    setConfig: (newConfig: Partial<MConfig>) => void;
    uiAction?: UIActionSpec;
    setUiAction: (action: Partial<UIActionSpec>) => void;
};

export const useAppContext: MStore<ContextDefinition> = mmCreateStore<ContextDefinition>((set) => ({
    config: new MConfigDefault(),
    setConfig: (newConfig: MConfig) => set((state: ContextDefinition) => ({
            config: {...state.config, ...newConfig}
        })
    ),
    setUiAction: (action: Partial<UIActionSpec>) => set((state: ContextDefinition) => ({
            uiAction: {...state.uiAction, ...action}
        })
    ),
}))