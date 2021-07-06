import shopActionType from "./shop.types";

export const updateCollectionMap = collectionMap => ({
    type: shopActionType.UPDATE_COLLECTION,
    payload: collectionMap
})