import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from "react-apollo";
import Loading from '../Loading/loading';

function DefaultMutation({ mutation, onCompleted, children }) {
    return (
        <Mutation mutation={mutation} onError={(e) => {
            if (e.networkError != null)
                if (e.networkError.result != null)
                    console.log(e.networkError.result)
        }}
            onCompleted={onCompleted}  >
            {
                (mutationAction, { loading, error, data }) => {
                    if (loading)
                        return <Loading />

                    if (error) {
                        return (
                            <div>
                                {error.message}
                            </div>
                        );
                    }

                    return children({ data, mutationAction });
                }
            }
        </Mutation>
    )
}

DefaultMutation.propTypes = {
    mutation: PropTypes.any.isRequired,
    onCompleted: PropTypes.func.isRequired
}

export default DefaultMutation;

