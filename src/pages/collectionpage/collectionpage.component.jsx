import React from 'react';
import './collectionpage.styles.scss';

import {connect} from 'react-redux';
import { selectCollectionItem } from '../../redux/shop/shop.selectors';


const CollectionPage = ({match,collections}) => {
    return(
        <div className="category">
            <h1> Collection Page </h1>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collections: selectCollectionItem(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);