import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collectionpage/collectionpage.component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import { updateCollectionMap } from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    
    state = {
        loading:true
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollectionMap} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollectionMap(collectionMap);
            this.setState({loading: false});
            
        });
    }
 
    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`} render= {(props)=> <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route  path={`${match.path}/:collectionId`} render= {(props)=> <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }      
}

const mapDispatchToProps = dispatch => ({
    updateCollectionMap: collectionMap => dispatch(updateCollectionMap(collectionMap))
}) 


export default connect(null,mapDispatchToProps)(ShopPage);