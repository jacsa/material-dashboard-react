import React from 'react';
import DefaultQuery from './DefaultQuery';

const withFormQuery = injectedProps => Component => {
    const WithFormQuery = props => {
        return (
            <DefaultQuery query={injectedProps.schemaQuery} fetchPolicy={"no-cache"} variables={{ name: injectedProps.schemaName }} >
                {({ data: { schemaForm } }) => {
                    return <Component {...props} schemaForm={schemaForm} />
                }}
            </DefaultQuery>
        )
    }
    return WithFormQuery;
}
export default withFormQuery;
