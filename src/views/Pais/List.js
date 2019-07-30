import React from 'react';
import { GET_ALL_PAISES, DELETE_PAIS } from '../../queries/pais';
import { GET_SCHEMA_FORM_COLUMNS_BY_NAME } from '../../queries/schemaForm';
import WithQuery from '../../components/DataGrid/withQuery';
import DataGrid from '../../components/DataGrid/DataGrid';
import refetchComponent from '../../components/DataGrid/refetchComponent';

import Apollo from '../../components/Apollo';
import { MTableToolbar } from "material-table";
import CustomLink from '../../components/CustomLink/CustomLink';
import AddIcon from '@material-ui/icons/Add';
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

const toolBarComponent = (props) => <div>
    <MTableToolbar {...props} />
    <div style={{ padding: '0px 10px' }}>
        <AddIcon onClick={() => {
            props.history.push(`/admin/pais/form`);
        }} />
    </div>
</div>;

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
                        actionComponent={compose(withRouter, refetchComponent(refetch))(actionBar)}
                        toolBarComponent={withRouter(toolBarComponent)}
                        data={paises} />
                }}
            </Apollo.DefaultQuery>
        </>
    );
};
export default compose(withRouter, WithQuery({ columnQuery: GET_SCHEMA_FORM_COLUMNS_BY_NAME, schemaName: "pais" }))(List);

