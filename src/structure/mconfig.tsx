export const ENV_KEY = {
    API_BASE_URL: "API_BASE_URL",
    ASSETS_BASE_URL: "ASSETS_BASE_URL",
}

declare const __APP_ENV__: Record<string, string> | undefined;

export function envValue(key: string, defaultValue: string): string {
    try {
        if (typeof __APP_ENV__ !== 'undefined' && __APP_ENV__[key] !== undefined) {
            return __APP_ENV__[key];
        }
    } catch (e) {
    }

    if (typeof (globalThis as any)[key] !== 'undefined') {
        return (globalThis as any)[key];
    }
    return defaultValue;
}

export interface MConfig {
    apiBaseUrl?: string
    assetsBaseUrl?: string
    mobileBreakpoint?: number
    defaultTitle?: string | undefined
}

export class MConfigDefault implements MConfig {
}