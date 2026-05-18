import {defineConfig} from 'tsdown'
import {baseConfig} from '../../tsdown.base.mjs'

export default defineConfig({
    ...baseConfig,
    entry: ['src/index.ts'],
    outDir: 'dist',
    deps: {
        alwaysBundle: [
            "i18next",
            "i18next-browser-languagedetector",
            "react-i18next"
        ]
    }
})