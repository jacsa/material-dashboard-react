import React from 'react'
import { Mutation } from "react-apollo";
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from "sweetalert2";  

const DeleteMutation = ({ mutation, variables, onCompleted, onError }) => {
    return (
        <>
            <Mutation mutation={mutation} onCompleted={onCompleted} onError={onError} >
                {
                    (deleteAction, { data, error }) => {
                        return (<a href="#" onClick={(e) => {
                            e.preventDefault();
                            Swal.fire({  
                                title: 'Information',  
                                type: 'warning',  
                                text: 'Are you sure you want to delete this record?',
                                cancelButtonText:"Cancel",
                                confirmButtonText:"Ok",
                                showCloseButton: true,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                            }).then( (result) =>{
                                if (result.value) {
                                    deleteAction({
                                        variables: variables
                                    })        
                                  }
                            });  
                        }} >  <DeleteIcon color="primary" /></a>
                        )
                    }
                }
            </Mutation>
        </>
    )
}

DeleteMutation.propTypes = {
    variables: PropTypes.object.isRequired,
    mutation: PropTypes.any.isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func
};
export default DeleteMutation
