import React from "react";
import { connect } from "react-redux";

import { selectCollection } from "../../redux/shop/shop.selectors.js";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleContainer>{title}</TitleContainer>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  // ownProps: props of the component we're wrapping in connect()
  collection: selectCollection(ownProps.match.params.collectionId)(state),
  // selectCollection: a func that returns a func ("currying"), i.e. createSelector(),
  // which takes "state" as an arg.
});

export default connect(mapStateToProps)(CollectionPage);
