import React from 'react';
import PropTypes from 'prop-types';
import { ADD_PAIS } from '../../../queries/pais';
import { GET_SCHEMA_FORM_BY_NAME } from '../../../queries/schemaForm';
import Apollo from '../../../components/Apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Form from "../../../components/FormGenerationEngine";
import withFormQuery from '../../../components/Apollo/withFormQuery';
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

const Create = ({ history, match: { params }, schemaForm }) => {
    return (
        <Apollo.DefaultMutation mutation={ADD_PAIS} onCompleted={(info) => {
            history.push('/admin/pais');
        }} >
            {({ mutationAction }) => {
                return <Form id="id"
                    noHtml5Validate
                    schema={schemaForm.schema}
                    uiSchema={schemaForm.uischema.properties}
                    showErrorList={false}
                    liveValidate
                    onError={onError}
                    onCancel={(e) => { e.preventDefault(); history.push('/admin/pais'); }}
                    onSubmit={async ({ formData }, e) => {
                        delete formData.__typename;
                        await mutationAction({
                            variables: {
                                id: parseInt(params.id),
                                input: formData
                            }
                        });
                    }} />
            }}
        </Apollo.DefaultMutation>
    )
};

Create.propTypes = {
    classes: PropTypes.any
};

export default compose(withRouter, withFormQuery({ schemaQuery: GET_SCHEMA_FORM_BY_NAME, schemaName: "pais" }))(Create);

