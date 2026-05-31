import {MConfig, MConfigDefault} from "../structure/mconfig";
import {UIActionSpec} from "mfront-ui";
import {mmCreateStore, MStore} from "mmcore";


type ContextDefinition = {
    config: MConfig;
    setConfig: (newConfig: Partial<MConfig>) => void;
    uiAction?: UIActionSpec;
    setUiAction: (action: Partial<UIActionSpec>) => void;
    loadingCount: number
    startLoading: () => void
    stopLoading: () => void
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
    loadingCount: 0,
    startLoading: () => set((state: ContextDefinition) => ({
            loadingCount: state.loadingCount + 1,
        })
    ),
    stopLoading: () => set((state: ContextDefinition) => ({
            loadingCount: Math.max(0, state.loadingCount - 1),
        })
    ),
}))