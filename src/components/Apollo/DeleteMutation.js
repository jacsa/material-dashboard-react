import React from 'react'
import { Mutation } from "react-apollo";
import PropTypes from 'prop-types';

const DeleteMutation = ({ mutation,variables,onCompleted,onError }) => {
    return (
         <Mutation mutation={mutation} onCompleted={onCompleted} onError={onError} >
            {
                (deleteAction, { data, error }) => {
                    return (<a href="#" onClick={(e) => {
                        e.preventDefault(); if (window.confirm('Are you sure you wish to delete this item?')) deleteAction({
                            variables: variables
                        })
                    }} > Delete</a> /*Agregar icono<Icon name='delete' /> */
                    )
                }
            }
        </Mutation>
    )
}

DeleteMutation.propTypes = {
    variables : PropTypes.object.isRequired,
    mutation : PropTypes.any.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};
export default DeleteMutation
