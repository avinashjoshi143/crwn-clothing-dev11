import React from 'react';
import './collectionpage.styles.scss';

import {connect} from 'react-redux';
import { selectCollectionItem } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectionPage = ({collections}) => {
    const {title, items} = collections;
    return(
        <div className="collection-page">
            <h1 className="title"> {title} </h1>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item = {item} />
                    ))
                }

            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collections: selectCollectionItem(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);