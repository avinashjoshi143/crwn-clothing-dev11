import React from 'react';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collectionpage/collectionpage.component';

import { updateCollectionMap } from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fecthCollectionStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    
    
    // unsubscribeFromSnapshot = null;

    componentDidMount() {

        const {fecthCollectionStartAsync} = this.props;
         fecthCollectionStartAsync();
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollectionMap(collectionMap);
        //     this.setState({loading: false});
        // });

        // this is a promise pattern that lost the live update.
        // this we are implemented inside the redux actions 
        // collectionRef.get().then(async snapshot => {
        //         const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        //         updateCollectionMap(collectionMap);
        //         this.setState({loading: false});
        //     });

        // fetches the data and its nested to way long but we can still get the required data in the form its unnecessary for our application
        // f'etch('https://firestore.googleapis.com/v1/projects/crwn-db-f8734/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(data => console.log(data));'

    }

    // componentWillUnmount() {
    //     this.unsubscribeFromSnapshot();
    // }
 
    render() {
        const {match,isCollectionFetching,isCollectionLoaded} = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} render= {(props)=> <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route  path={`${match.path}/:collectionId`} render= {(props)=> <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
            </div>
        );
    }      
}


const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fecthCollectionStartAsync: ()=> dispatch(fecthCollectionStartAsync())
}) 


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);