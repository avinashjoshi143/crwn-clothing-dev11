import { connect } from "react-redux";
import { selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../with-spinner/with-spinner.component";
import collectionOverviewComponent from "./collection-overview.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

// export const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionOverviewComponent));

export const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionOverviewComponent);

