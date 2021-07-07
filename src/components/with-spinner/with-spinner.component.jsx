import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';


const WithSpinner = WrappedComponet => ({isLoading, ...otherProps}) => {
    return isLoading ? 
    (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) :
    (
        <WrappedComponet {...otherProps} />
    )  
}

export default WithSpinner