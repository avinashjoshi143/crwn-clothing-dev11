import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from './collectionpage.component';
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

export const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

