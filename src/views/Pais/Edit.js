import React from 'react';
import PropTypes from 'prop-types';
import Form from "react-jsonschema-form";
import SchemaForm from 'jsonschema-form-for-material-ui';
import { GET_PAIS_BY_ID, UPDATE_PAIS } from '../../queries/pais';
import { GET_SCHEMA_FORM_BY_NAME } from '../../queries/schemaForm';

import Apollo from '../../components/Apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import withStyles from "@material-ui/core/styles/withStyles";
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';

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
        {errors.map(error => (
            <li key={error.stack}>
              {error.stack}
            </li>
          ))}
      </ul>
    );
  }

const Edit = ({ history, match: { params }, classes }) => {
    return ( 
        <Apollo.DefaultQuery fetchPolicy="no-cache" query={GET_SCHEMA_FORM_BY_NAME} variables={{ name: "pais" }} >
            {({ data: { schemaForm } }) => {
                return (
                    <Apollo.DefaultQuery query={GET_PAIS_BY_ID} variables={{ id : parseInt(params.id) }} fetchPolicy="no-cache">
                        {({ data: { pais } }) => {
                            return <>
                                <Apollo.DefaultMutation mutation={UPDATE_PAIS} onCompleted={(info) => {
                                   history.push('/admin/pais');
                                }} >
                                    {({ mutationAction }) => {
                                        console.log(pais);
                                        return <SchemaForm id="id" 
                                            schema={schemaForm.schema}
                                            classes={classes}
                                            key={params.id}
                                            liveValidate
                                            formData={pais}
                                            ErrorList={ErrorListTemplate}
                                            uiSchema={schemaForm.uischema.properties}
                                            onSubmit={async ({ formData }, e) => {
                                                delete formData.__typename;
                                                console.log(formData);
                                                await mutationAction({
                                                    variables: {
                                                        id: parseInt(params.id),
                                                        input: formData
                                                    }
                                                });
                                            }}
                                            onError={onError}
                                            onChange={log}>{
                                            <div>
                                                    <EditIcon onClick={onCancel}/>
                                                    <EditIcon onClick={onCancel}/>
                                            </div>}
                                        </SchemaForm>
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
    classes : PropTypes.any
};

export default compose(withStyles(styles),withRouter)(Edit);

