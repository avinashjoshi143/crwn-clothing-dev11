import React from 'react';

import {connect} from 'react-redux';
import { selectCollectionItem } from '../../redux/shop/shop.selectors';


import { CollectionPageContainer,
    CollectionTitle,
    CollectionItemContainer,
    CollectionItemComponent} from './collectionpage.styles';

const CollectionPage = ({collections,dispatch,match}) => {
    const {title, items} = collections;
    return(
        <CollectionPageContainer>
            <CollectionTitle> {title} </CollectionTitle>
            <CollectionItemContainer className="items">
                {
                    items.map(item => (
                        <CollectionItemComponent key={item.id} item = {item} />
                    ))
                }

            </CollectionItemContainer>
        </CollectionPageContainer>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collections: selectCollectionItem(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);