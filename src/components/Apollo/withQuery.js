import React from 'react';
import Card from '../Card/Card.jsx';
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import DefaultQuery from './DefaultQuery';

const withQuery = injectedProps => Component => {
    const WithQuery = props => {
        return (
            <Card>
                <CardHeader color="danger">
                    <div>Listado</div>
                </CardHeader>
                <CardBody>
                    {<DefaultQuery query={injectedProps.columnQuery} fetchPolicy={"no-cache"} variables={{ name: injectedProps.schemaName }} >
                        {({ data: { schemaForm } }) => {
                            return <Component {...props} columns={schemaForm.columns} />
                        }}
                    </DefaultQuery>}
                </CardBody>
            </Card>
        )
    }
    return WithQuery;
}
export default withQuery;
