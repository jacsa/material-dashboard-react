import React from'react';

const refetchComponent = (refetch) => Component => {
    const RefetchComponent = props => <Component {...props} refetch={refetch} />
    return RefetchComponent;
};

export default refetchComponent;