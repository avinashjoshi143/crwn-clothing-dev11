import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';


import { withRouter } from 'react-router-dom';

import { CollectionPreviewContainer,
    TitleHead,
    PreviewContainer} from './collection-preview.styles';   

const CollectionPreview = ({title,items,match,history}) => (
    <CollectionPreviewContainer>
        <TitleHead onClick = {()=> history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</TitleHead>
        <PreviewContainer>
            {
                items
                .filter((item,idx) => idx < 4)
                .map((item) => 
                        <CollectionItem key={item.id} item={item} />
                    )
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);