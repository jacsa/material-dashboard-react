import React from 'react';
import { GET_ALL_SCHEMA_FORM, DELETE_SCHEMA_FORM  } from '../../queries/schemaForm';
import DataGrid from '../../components/DataGrid/DataGrid';
import refetchComponent from '../../components/DataGrid/refetchComponent';
import toNavigateComponent from '../../components/DataGrid/toNavigateComponent';
import ToolBarComponent from '../../components/DataGrid/ToolBarComponent';
import Apollo from '../../components/Apollo';
import CustomLink from '../../components/CustomLink/CustomLink';

import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.success("Eliminado exitosamente!");
const actionBar = props => {
    return (
        <div>
            <CustomLink to={`/admin/schemaForm/form/${props.data.id}`} history={props.history} />
            <Apollo.DeleteMutation mutation={DELETE_SCHEMA_FORM} variables={{ input: { id: props.data.id } }}
                onCompleted={(info) => { notify(); props.refetch(); }} />
        </div>
    )
};

const columns = [{ "field": "name", "title": "Nombre" }, { "type": "boolean", "field": "estatus", "title": "Estatus" }];

const List = (props) => {
    return (
        <>
            <ToastContainer position="top-right"
                autoClose={2000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                draggable
                pauseOnHover />
            
            <Apollo.DefaultQuery query={GET_ALL_SCHEMA_FORM} fetchPolicy={"no-cache"}>
                {({ data: { schemaForms }, refetch }) => {
                    return <DataGrid 
                        columns={columns}
                        actionComponent={compose(withRouter,  refetchComponent(refetch))(actionBar)}
                        toolBarComponent={compose(withRouter, toNavigateComponent("/admin/schemaForm/form/"))(ToolBarComponent)}
                        data={schemaForms} />
                }}
            </Apollo.DefaultQuery>
        </>
    );
};
export default compose(withRouter)(List);

