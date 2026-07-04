import {mmReactUseCallback} from "mmcore";

type StorageType = 'local' | 'session';

export interface BrowserStorageAction {
    set: (key: string, value: any, options?: { encodeBase64?: boolean }) => void;
    get: <T = any>(key: string, options?: { decodeBase64?: boolean }) => T | null;
    remove: (key: string) => void;
    clear: () => void;
}

export const useBrowserStorage = (storageType: StorageType = 'local'): BrowserStorageAction => {

    const getStorage = mmReactUseCallback((): Storage | null => {
        if (typeof window === 'undefined') return null;
        return storageType === 'session' ? window.sessionStorage : window.localStorage;
    }, [storageType]);

    const set = mmReactUseCallback((key: string, value: any, options?: { encodeBase64?: boolean }) => {
        try {
            const storage = getStorage();
            if (!storage) {
                return;
            }

            let stringValue = typeof value === 'string' ? value : JSON.stringify(value);

            if (options?.encodeBase64) {
                stringValue = window.btoa(stringValue);
            }

            storage.setItem(key, stringValue);
        } catch (error) {
            console.error(`Error setting key "${key}" in ${storageType}Storage:`, error);
        }
    }, [getStorage, storageType]);

    const get = mmReactUseCallback(<T = any>(key: string, options?: { decodeBase64?: boolean }): T | null => {
        try {
            const storage = getStorage();
            const item = storage?.getItem(key);

            if (!item) {
                return null;
            }

            let processedItem = item;
            if (options?.decodeBase64) {
                processedItem = window.atob(item);
            }

            try {
                return JSON.parse(processedItem) as T;
            } catch {
                return processedItem as unknown as T;
            }
        } catch (error) {
            console.error(`Error getting key "${key}" from ${storageType}Storage:`, error);
            return null;
        }
    }, [getStorage, storageType]);

    const remove = mmReactUseCallback((key: string) => {
        try {
            getStorage()?.removeItem(key);
        } catch (error) {
            console.error(`Error removing key "${key}" from ${storageType}Storage:`, error);
        }
    }, [getStorage, storageType]);

    const clear = mmReactUseCallback(() => {
        try {
            getStorage()?.clear();
        } catch (error) {
            console.error(`Error clearing ${storageType}Storage:`, error);
        }
    }, [getStorage, storageType]);

    return {set, get, remove, clear};
};

/*
USAGE EXAMPLE:

interface UserData {
    id: number;
    name: string;
}

export const StorageComponent = () => {
    const localStorage = useBrowserStorage('local');
    const sessionStorage = useBrowserStorage('session');

    const handleSaveData = () => {
        localStorage.set('user_profile', { id: 101, name: 'John Doe' });
        localStorage.set('auth_token', 'xyz-secret-token', { encodeBase64: true });
        sessionStorage.set('current_tab', 'dashboard');
    };

    const handleGetData = () => {
        const user = localStorage.get<UserData>('user_profile');
        const token = localStorage.get<string>('auth_token', { decodeBase64: true });
        const tab = sessionStorage.get<string>('current_tab');

        console.log(user?.name);
        console.log(token);
        console.log(tab);
    };

    const handleClearData = () => {
        localStorage.remove('user_profile');
        sessionStorage.clear();
    };

    return (
        <div>
            <button onClick={handleSaveData}>Save</button>
            <button onClick={handleGetData}>Retrieve</button>
            <button onClick={handleClearData}>Clear</button>
        </div>
    );
};
*/