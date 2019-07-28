import React, { useState } from 'react';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Apollo from '../../components/Apollo';
import withStyles from "@material-ui/core/styles/withStyles";
import MaterialTable, { MTableToolbar } from "material-table";
import CustomLink from '../../components/CustomLink/CustomLink';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
const styles = makeStyles(theme => ({
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    icon: {
        margin: theme.spacing(2),
        color: red
    },
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
            color: red[800],
        }
    }
}));

const DataGrid = ({ columnQuery, dataQuery, deleteQuery, schemaName, onAdd,variablesQuery,editPath,history }) => {
    return (
        <Card>
            <CardHeader color="danger">
                <div>Listado</div>
            </CardHeader>
            <CardBody>
                <Apollo.DefaultQuery query={columnQuery} fetchPolicy={"no-cache"} variables={{ name: schemaName }} >
                    {({ data: { schemaForm } }) => {
                        return <Apollo.DefaultQuery query={dataQuery} variables={variablesQuery ? variablesQuery : null} fetchPolicy={"no-cache"}>
                            {({ data: { paises }, refetch }) => {
                                return <MaterialTable
                                    title=""
                                    data={paises}
                                    columns={schemaForm.columns}
                                    actions={[
                                        {
                                            icon: 'save',
                                            tooltip: 'Save User',
                                            onClick: (event, rowData) => console.log(rowData),
                                            isFreeAction: false
                                        }
                                    ]}
                                    options={{
                                        actionsColumnIndex: -1
                                    }}
                                    components={{
                                        Action: props => (
                                            <div>
                                                <CustomLink to={`${editPath}/${props.data.id}`} history={history} />
                                                <Apollo.DeleteMutation mutation={deleteQuery} variables={{ input: { id: props.data.id } }} onCompleted={(info) => { refetch(); }} />
                                            </div>
                                        ),
                                        Toolbar: props => (
                                            <div>
                                                <MTableToolbar {...props} />
                                                <div style={{ padding: '0px 10px' }}>
                                                    <AddIcon onClick={onAdd} />
                                                </div>
                                            </div>
                                        )
                                    }}
                                />;
                            }}
                        </Apollo.DefaultQuery>
                    }}
                </Apollo.DefaultQuery>
            </CardBody>
        </Card>
    );
};

DataGrid.propTypes = {
    schemaName: PropTypes.string.isRequired,
    columnQuery: PropTypes.any.isRequired,
    dataQuery: PropTypes.any.isRequired,
    variablesQuery: PropTypes.object,
    deleteQuery: PropTypes.any.isRequired,
    onAdd: PropTypes.func.isRequired,
    editPath: PropTypes.string.isRequired,
    fetchPolicy: PropTypes.string,
    history: PropTypes.object
}

export default compose(withStyles(styles),withRouter)(DataGrid);
