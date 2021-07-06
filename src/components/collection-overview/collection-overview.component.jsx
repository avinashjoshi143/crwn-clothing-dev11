import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionOverviewContainer } from './collection-overview.styles';



const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {
            collections.map(({id,...otherCollectionProps}) => 
                <CollectionPreview key={id} {...otherCollectionProps} />
            )
        }
    </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
