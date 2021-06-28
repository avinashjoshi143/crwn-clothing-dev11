import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({name,imageUrl,price}) => (
    <dvi class="collection-item">
        <div 
        className="image"
        style = {{backgroundImage:`url(${imageUrl})`}}
        />
        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">{price}$</span>
        </div>

    </dvi>
);

export default CollectionItem;