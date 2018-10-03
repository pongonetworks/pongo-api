import { IHash, IWavesConfig } from '../interfaces';
declare const _default: {
    getNetworkByte(): number;
    getNodeAddress(): string;
    getMatcherAddress(): string;
    getMinimumSeedLength(): number;
    getRequestParams(): IHash<any>;
    getAssetFactory(): Function;
    getLogLevel(): "error" | "none" | "warning" | "info";
    getTimeDiff(): number;
    get(): IWavesConfig;
    set(newConfig: Partial<IWavesConfig>): void;
    clear(): void;
};
export default _default;
