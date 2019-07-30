import React, { useState } from 'react'
import { Mutation } from "react-apollo";
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
//import SweetAlert from 'sweetalert2-react';
import AlertSuccess from '../Alert/AlertSuccess';
import Swal from "sweetalert2";  

const DeleteMutation = ({ mutation, variables, onCompleted, onError }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            {/* <SweetAlert
                show={show}
                title="PAT"
                text="Desa eliminar el registro seleccionado?"
                onClick={() => { console.log("Se elimina"); setShow(false); }}
            /> */}
            {/* <AlertSuccess  /> */}
            <Mutation mutation={mutation} onCompleted={onCompleted} onError={onError} >
                {
                    (deleteAction, { data, error }) => {
                        return (<a href="#" onClick={(e) => {
                            e.preventDefault();
                            setShow(true);
                            Swal.fire({  
                                title: 'Information',  
                                type: 'warning',  
                                text: 'Are you sure you want to delete this record?',
                                cancelButtonText:"Cancel",
                                confirmButtonText:"Ok",
                                showCloseButton: true,
                                showCancelButton: true,
                                cancelButtonColor: '#d33',
                                // confirmButtonClass:"mui-btn mui-btn--primary",
                                // cancelButtonClass:"mui-btn mui-btn--danger"
                            }).then( (result) =>{
                                if (result.value) {
                                    deleteAction({
                                        variables: variables
                                    })        
                                  }
                            });  
                        }} >  <DeleteIcon color="secondary" /></a>
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
