import { createSelector } from "reselect";

const COLLECTION_MAP_ID = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionItem = urlParmId => 
    createSelector(
        [selectShopCollections],
        collections => collections.find(collection => collection.id === COLLECTION_MAP_ID[urlParmId])
    );