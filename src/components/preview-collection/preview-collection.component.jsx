import React from 'react';
import CollectionItem from '../collection-items/collection-item.component';
import './preview-collection.styles.scss';

const PreviewCollection =({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">

        {items.filter((item, idx) => idx < 4)
            .map(({id, ...otheritemProps}) => (
            <CollectionItem key={id} {...otheritemProps}></CollectionItem>
        ))}

        </div>
    </div>
)

export default PreviewCollection;