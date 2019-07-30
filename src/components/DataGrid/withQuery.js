import React, { useState } from 'react';
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Apollo from '../Apollo';

const withQuery = injectedProps => Component => {
    const WithQuery = props => {
        return (
            <Card>
                <CardHeader color="danger">
                    <div>Listado</div>
                </CardHeader>
                <CardBody>
                    {<Apollo.DefaultQuery query={injectedProps.columnQuery} fetchPolicy={"no-cache"} variables={{ name: injectedProps.schemaName }} >
                        {({ data: { schemaForm } }) => {
                            return <Component {...props} columns={schemaForm.columns} />
                        }}
                    </Apollo.DefaultQuery>}
                </CardBody>
            </Card>
        )
    }
    return WithQuery;
}
export default withQuery;
