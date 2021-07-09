import React, { useEffect } from 'react';

import {Route} from 'react-router-dom';

import {connect} from 'react-redux';

import { fecthCollectionStartAsync } from '../../redux/shop/shop.actions';

import { CollectionOverviewContainer } from '../../components/collection-overview/collection-overview.container';

import {CollectionPageContainer} from '../collectionpage/collectionpage.container';

const ShopPage = ({fecthCollectionStartAsync,match})=> {
    
    useEffect(()=>{
        fecthCollectionStartAsync();
    },[fecthCollectionStartAsync]);
    
    // unsubscribeFromSnapshot = null;

    // componentDidMount() {
    //         fecthCollectionStartAsync();
    //     // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //     //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //     //     updateCollectionMap(collectionMap);
    //     //     this.setState({loading: false});
    //     // });

    //     // this is a promise pattern that lost the live update.
    //     // this we are implemented inside the redux actions 
    //     // collectionRef.get().then(async snapshot => {
    //     //         const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //     //         updateCollectionMap(collectionMap);
    //     //         this.setState({loading: false});
    //     //     });

    //     // fetches the data and its nested to way long but we can still get the required data in the form its unnecessary for our application
    //     // f'etch('https://firestore.googleapis.com/v1/projects/crwn-db-f8734/databases/(default)/documents/collections')
    //     // .then(response => response.json())
    //     // .then(data => console.log(data));'

    // }

    // componentWillUnmount() {
    //     this.unsubscribeFromSnapshot();
    // }
 

        return (
            <div>
                <Route exact path={`${match.path}`} component = {CollectionOverviewContainer} />
                <Route  path={`${match.path}/:collectionId`} component = {CollectionPageContainer} />
            </div>
        );
    }      

const mapDispatchToProps = dispatch => ({
    fecthCollectionStartAsync: ()=> dispatch(fecthCollectionStartAsync())
}) 


export default connect(null,mapDispatchToProps)(ShopPage);