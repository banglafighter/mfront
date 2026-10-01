export type UIPlatform = "web" | "mobile"

export interface MRegistryOptions {
    platform: UIPlatform
    appType?: string // When needed for specific app types: Admission, Others
}