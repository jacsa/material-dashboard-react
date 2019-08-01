import React from 'react';
import PropTypes from 'prop-types';
import { GET_PAIS_BY_ID, UPDATE_PAIS } from '../../../queries/pais';
import { GET_SCHEMA_FORM_BY_NAME } from '../../../queries/schemaForm';

import Apollo from '../../../components/Apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Form from "../../../components/FormGenerationEngine";
import withFormQuery from '../../../components/Apollo/withFormQuery';

const onError = (errors) => console.log("I have", errors.length, "errors to fix");

const Edit = ({ id, history, match: { params }, schemaForm }) => {
    return (
        <Apollo.DefaultQuery query={GET_PAIS_BY_ID} variables={{ id: id }} fetchPolicy="no-cache">
            {({ data: { pais } }) => {
                return <Apollo.DefaultMutation mutation={UPDATE_PAIS} onCompleted={(info) => {
                        history.push('/admin/pais');
                    }} >
                        {({ mutationAction }) => {
                            console.log(pais);
                            return <Form id="id"
                                key={params.id}
                                liveValidate={true}
                                formData={pais}
                                schema={schemaForm.schema}
                                uiSchema={schemaForm.uischema.properties}
                                onCancel={(e) => { e.preventDefault(); history.push('/admin/pais'); }}
                                onSubmit={async ({ formData }, e) => {
                                    delete formData.__typename;
                                    await mutationAction({
                                        variables: {
                                            id: parseInt(params.id),
                                            input: formData
                                        }
                                    });
                                }}
                                onError={onError}
                            />
                        }}
                    </Apollo.DefaultMutation>
            }}
        </Apollo.DefaultQuery>
    )
};

Edit.propTypes = {
    id: PropTypes.number.isRequired
};

export default compose(withRouter, withFormQuery({ schemaQuery: GET_SCHEMA_FORM_BY_NAME, schemaName: "pais" }))(Edit);

//https://codesandbox.io/s/13vo8wj13?from-embed