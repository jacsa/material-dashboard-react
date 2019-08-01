import React from 'react';
import { GET_ALL_PAISES, DELETE_PAIS } from '../../queries/pais';
import { GET_SCHEMA_FORM_COLUMNS_BY_NAME } from '../../queries/schemaForm';
import WithQuery from '../../components/Apollo/withQuery';
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
            <CustomLink to={`/admin/pais/form/${props.data.id}`} history={props.history} />
            <Apollo.DeleteMutation mutation={DELETE_PAIS} variables={{ input: { id: props.data.id } }}
                onCompleted={(info) => { notify(); props.refetch();}} />
        </div>
    )
};

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
                pauseOnHover/>

            <Apollo.DefaultQuery query={GET_ALL_PAISES} fetchPolicy={"no-cache"}>
                {({ data: { paises }, refetch }) => {
                    return <DataGrid columns={props.columns}
                        actionComponent={compose(withRouter,  refetchComponent(refetch))(actionBar)}
                        toolBarComponent={compose(withRouter, toNavigateComponent("/admin/pais/form/"))(ToolBarComponent)}
                        data={paises} />
                }}
            </Apollo.DefaultQuery>
        </>
    );
};
export default compose(withRouter, WithQuery({ columnQuery: GET_SCHEMA_FORM_COLUMNS_BY_NAME, schemaName: "pais" }))(List);

