import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types'
import Loading from '../Loading/loading';
const DefaultQuery = ({ query, fetchPolicy, variables = {}, children }) => (
    <Query query={query} variables={variables} fetchPolicy={fetchPolicy}>
        {({ loading, error, data, fetchMore, subscribeToMore, refetch }) => {
            if (loading) {
                return <Loading />
            }

            if (error) {
                debugger
                console.log(error);
                return (
                    <div>{error.message}</div> 
                );
            }
            return children({ data, fetchMore, subscribeToMore, refetch });
        }}
    </Query>
);


DefaultQuery.propTypes = {
    query: PropTypes.any.isRequired,
    fetchPolicy: PropTypes.any.isRequired,
    variables: PropTypes.object
}

export default DefaultQuery;