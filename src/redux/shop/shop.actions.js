import shopActionType from "./shop.types";
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';


export const fetchCollectionStart = () => ({
    type:shopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionMap => ({
    type: shopActionType.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionFailure = errorMessage => ({
    type: shopActionType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fecthCollectionStartAsync = () => {

    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart())

        collectionRef.get().then(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(collectionMap))
        }).catch(error => dispatch(fetchCollectionFailure(error.message)));
    }
}