import React from 'react';
import { GET_ALL_PAISES, DELETE_PAIS } from '../../queries/pais';
import { GET_SCHEMA_FORM_COLUMNS_BY_NAME } from '../../queries/schemaForm';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Apollo from '../../components/Apollo';
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Table from "components/Table/Table.jsx";

const onNavigate = () => {
    // navigate('/pais/form');
};
const styles = {
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
    }
  };

const List = (props) => {
    const { classes } = props;
    return (
        <Apollo.DefaultQuery query={GET_SCHEMA_FORM_COLUMNS_BY_NAME} fetchPolicy={"no-cache"} variables={{ name: "pais" }} >
            {({ data: { schemaForm } }) => {
                return <Apollo.DefaultQuery query={GET_ALL_PAISES} fetchPolicy={"no-cache"}>
                    {({ data: { paises }, refetch }) => {
                        return <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}>Listado</h4>
                            </CardHeader>
                            <CardBody>
                                <Table
                                    tableHeaderColor="primary"
                                    tableHead={["Name", "Country", "City", "Salary"]}
                                    tableData={[
                                        ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                                        ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                                        ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                                        ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                                        ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                                        ["Mason Porter", "Chile", "Gloucester", "$78,615"]
                                    ]}
                                />
                            </CardBody>
                        </Card>
                    }}
                </Apollo.DefaultQuery>
            }}
        </Apollo.DefaultQuery>
    );
};
export default  withStyles(styles)(List);
