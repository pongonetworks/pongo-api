import { IKeyPair } from '../../interfaces';
declare function encryptSeedPhrase(seedPhrase: string, password: string, encryptionRounds?: number): string;
declare function decryptSeedPhrase(encryptedSeedPhrase: string, password: string, encryptionRounds?: number): any;
export interface ISeed {
    readonly phrase: string;
    readonly address: string;
    readonly keyPair: IKeyPair;
    encrypt(password: string, encryptionRounds?: number): any;
}
declare const _default: {
    create(words?: number): ISeed;
    fromExistingPhrase(phrase: string): ISeed;
    encryptSeedPhrase: typeof encryptSeedPhrase;
    decryptSeedPhrase: typeof decryptSeedPhrase;
};
export default _default;
