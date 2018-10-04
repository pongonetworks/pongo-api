/** START OF THE LICENSED CODE */
/******************************************************************************
 * Copyright © 2013-2016 The Nxt Core Developers.                             *
 *                                                                            *
 * See the AUTHORS.txt, DEVELOPER-AGREEMENT.txt and LICENSE.txt files at      *
 * the top-level directory of this distribution for the individual copyright  *
 * holder information and the developer policies on copyright and licensing.  *
 *                                                                            *
 * Unless otherwise agreed in a custom licensing agreement, no part of the    *
 * Nxt software, including this file, may be copied, modified, propagated,    *
 * or distributed except according to the terms contained in the LICENSE.txt  *
 * file.                                                                      *
 *                                                                            *
 * Removal or modification of this copyright notice is prohibited.            *
 *                                                                            *
 ******************************************************************************/
declare let converters: {
    byteArrayToHexString: (bytes: any) => string;
    stringToByteArray: (str: any) => number[];
    hexStringToByteArray: (str: any) => any[];
    stringToHexString: (str: any) => any;
    hexStringToString: (hex: any) => any;
    checkBytesToIntInput: (bytes: any, numBytes: any, opt_startIndex: any) => any;
    byteArrayToSignedShort: (bytes: any, opt_startIndex: any) => any;
    byteArrayToSignedInt32: (bytes: any, opt_startIndex: any) => any;
    byteArrayToBigInteger: (bytes: any, opt_startIndex: any) => any;
    byteArrayToWordArray: (byteArray: any) => any;
    wordArrayToByteArray: (wordArray: any) => any[];
    wordArrayToByteArrayImpl: (wordArray: any, isFirstByteHasSign: any) => any[];
    byteArrayToString: (bytes: any, opt_startIndex?: any, length?: any) => string;
    byteArrayToShortArray: (byteArray: any) => number[];
    shortArrayToByteArray: (shortArray: any) => number[];
    shortArrayToHexString: (ary: any) => string;
    /**
     * Produces an array of the specified number of bytes to represent the integer
     * value. Default output encodes ints in little endian format. Handles signed
     * as well as unsigned integers. Due to limitations in JavaScript's number
     * format, x cannot be a true 64 bit integer (8 bytes).
     */
    intToBytes_: (x: any, numBytes: any, unsignedMax: any, opt_bigEndian: any) => any[];
    int32ToBytes: (x: any, opt_bigEndian: any) => any[];
    int16ToBytes: (x: any, opt_bigEndian: any) => any[];
    /**
     * Based on https://groups.google.com/d/msg/crypto-js/TOb92tcJlU0/Eq7VZ5tpi-QJ
     * Converts a word array to a Uint8Array.
     * @param {WordArray} wordArray The word array.
     * @return {Uint8Array} The Uint8Array.
     */
    wordArrayToByteArrayEx: (wordArray: any) => Uint8Array;
    /**
     * Converts a Uint8Array to a word array.
     * @param {string} u8Str The Uint8Array.
     * @return {WordArray} The word array.
     */
    byteArrayToWordArrayEx: (u8arr: any) => any;
};
/** END OF THE LICENSED CODE */
export default converters;
