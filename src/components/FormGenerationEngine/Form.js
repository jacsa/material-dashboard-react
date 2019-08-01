import React from "react";
import { Button } from "@material-ui/core";
import MForm from "react-jsonschema-form";
import BaseInput from "./BaseInput";
import SelectWidget from "./SelectWidget";
import CheckboxWidget from "./CheckboxWidget";
import FieldTemplate from "./FieldTemplate";
import RadioWidget from "./RadioWidget";
import Grid from '@material-ui/core/Grid';


const widgets = {
  BaseInput,
  SelectWidget,
  CheckboxWidget,
  RadioWidget
};

const Form = ({ onSubmit, uiSchema = {}, formData, schema, liveValidate = true, onCancel,fields, ArrayFieldTemplate }) => {
  return (
    <div>
      <MForm
        noHtml5Validate
        FieldTemplate={FieldTemplate}
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        widgets={widgets}
        showErrorList={false}
        liveValidate={liveValidate}
        fields={fields}
        ArrayFieldTemplate={ArrayFieldTemplate}
        onSubmit={onSubmit}
      >
        <div style={{ paddingLeft: 12 }}>
          <Grid container spacing={1}>
            <Grid item >
              <Button type="submit" variant="contained" color="default">
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button type="button" onClick={onCancel} variant="contained" color="primary">
                Cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      </MForm>
    </div>
  );
};

export default Form;
