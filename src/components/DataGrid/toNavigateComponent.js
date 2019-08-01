import React from'react';

const toNavigateComponent = (to) => Component => {
    const ToNavigateComponent = props => <Component {...props} to={to} />
    return ToNavigateComponent;
};

export default toNavigateComponent;