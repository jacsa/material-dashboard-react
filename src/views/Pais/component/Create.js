import React from 'react';
import PropTypes from 'prop-types';


import { ADD_PAIS } from '../../../queries/pais';
import { GET_SCHEMA_FORM_BY_NAME } from '../../../queries/schemaForm';

import Apollo from '../../../components/Apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Button } from "@material-ui/core";

import Form from "../../../components/FormGenerationEngine";

const log = (type) => console.log.bind(console, type);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

const Create = ({ history, match: { params } }) => {
    return (
        <Apollo.DefaultQuery fetchPolicy="no-cache" query={GET_SCHEMA_FORM_BY_NAME} variables={{ name: "pais" }} >
            {({ data: { schemaForm } }) => {
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
                                onSubmit={async ({ formData }, e) => {
                                    delete formData.__typename;
                                    await mutationAction({
                                        variables: {
                                            id: parseInt(params.id),
                                            input: formData
                                        }
                                    });
                                }} >
                                <div style={{ paddingLeft: 12 }}>
                                    <Button type="submit" variant="contained" color="primary">
                                        Save
                                    </Button>
                                </div>
                            </Form>

                        }}
                    </Apollo.DefaultMutation>
                );
            }}
        </Apollo.DefaultQuery>
    )
};

Create.propTypes = {
    classes: PropTypes.any
};

export default compose(withRouter)(Create);

