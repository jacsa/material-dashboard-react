import React from 'react';
import PropTypes from 'prop-types';
//import Form from "react-jsonschema-form";
import { GET_PAIS_BY_ID, UPDATE_PAIS } from '../../../queries/pais';
import { GET_SCHEMA_FORM_BY_NAME } from '../../../queries/schemaForm';

import Apollo from '../../../components/Apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import withStyles from "@material-ui/core/styles/withStyles";
import Form from "../../../components/FormGenerationEngine";

const log = (type) => console.log.bind(console, type);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");
const onCancel = e => {
    //navigate('/pais');
};

const styles = theme => ({
    field: {},
    formButtons: {},
    root: {},
  });

function ErrorListTemplate(props) {
    const {errors} = props;
    return (
      <ul>
        {
        //     errors.map(error => (
        //     <li key={error.stack}>
        //       {error.stack}
        //     </li>
        //   ))
        }
      </ul>
    );
}

const Edit = ({id, history, match: { params }, classes }) => {
    return ( 
        <Apollo.DefaultQuery fetchPolicy="no-cache" query={GET_SCHEMA_FORM_BY_NAME} variables={{ name: "pais" }} >
            {({ data: { schemaForm } }) => {
                return (
                    <Apollo.DefaultQuery query={GET_PAIS_BY_ID} variables={{ id : id }} fetchPolicy="no-cache">
                        {({ data: { pais } }) => {
                            return <>
                                <Apollo.DefaultMutation mutation={UPDATE_PAIS} onCompleted={(info) => {
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
                                            onSubmit={async ({ formData }, e) => {
                                                delete formData.__typename;
                                                // console.log(formData);
                                                await mutationAction({
                                                    variables: {
                                                        id: parseInt(params.id),
                                                        input: formData
                                                    }
                                                });
                                            }}
                                            onError={onError}
                                            onChange={log} />
                                    }}
                                </Apollo.DefaultMutation>
                            </>
                        }}
                    </Apollo.DefaultQuery>
                );
            }}
        </Apollo.DefaultQuery>
    )
};

Edit.propTypes = {
    classes : PropTypes.any,
    id: PropTypes.number.isRequired
};

export default compose(withStyles(styles),withRouter)(Edit);

//https://codesandbox.io/s/13vo8wj13?from-embed