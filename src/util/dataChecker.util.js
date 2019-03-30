/* return true if dataArray is an array with at least one element */
export function isDataArrayValid(dataArray) {
    return !!( Array.isArray(dataArray) && dataArray.length );
}
