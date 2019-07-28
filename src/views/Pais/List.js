import React from 'react';
import { GET_ALL_PAISES, DELETE_PAIS } from '../../queries/pais';
import { GET_SCHEMA_FORM_COLUMNS_BY_NAME } from '../../queries/schemaForm';
import DataGrid from '../../components/DataGrid/DataGrid';
// import * as ROUTES from '../../constants/routes';
// import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
// import CardBody from "components/Card/CardBody.jsx";
// import Apollo from '../../components/Apollo';
// import withStyles from "@material-ui/core/styles/withStyles";
// import MaterialTable, { MTableToolbar } from "material-table";
// import CustomLink from '../../components/CustomLink/CustomLink';
// import AddIcon from '@material-ui/icons/Add';

const onNavigate = () => {
    window.alert('Agregar');
};

const List = (props) => {
    return (
        <DataGrid
            columnQuery={GET_SCHEMA_FORM_COLUMNS_BY_NAME}
            dataQuery={GET_ALL_PAISES}
            deleteQuery={DELETE_PAIS}
            onAdd={onNavigate}
            editPath="/admin/pais/edit"
            schemaName="pais"
        ></DataGrid>
    );
};
export default (List);
