import { IHash, IWavesConfig } from '../interfaces';
declare const _default: {
    getNetworkByte(): number;
    getNodeAddress(): string;
    getMatcherAddress(): string;
    getMinimumSeedLength(): number;
    getRequestParams(): IHash<any>;
    getAssetFactory(): Function;
    getLogLevel(): import("interfaces").TLogLevel;
    getTimeDiff(): number;
    get(): IWavesConfig;
    set(newConfig: Partial<IWavesConfig>): void;
    clear(): void;
};
export default _default;
