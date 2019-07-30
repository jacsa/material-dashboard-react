import React from "react";
import { Button } from "@material-ui/core";
import MForm from "react-jsonschema-form";
import BaseInput from "./BaseInput";
import SelectWidget from "./SelectWidget";
import CheckboxWidget from "./CheckboxWidget";
import FieldTemplate from "./FieldTemplate";
import RadioWidget from "./RadioWidget";

const widgets = {
  BaseInput,
  SelectWidget,
  CheckboxWidget,
  RadioWidget
};

const Form = ({ onSubmit, uiSchema = {}, formData,schema, liveValidate = true }) => {
  return (
    <div style={{  }}>
      <MForm
        noHtml5Validate
        FieldTemplate={FieldTemplate}
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        widgets={widgets}
        showErrorList={false}
        liveValidate={liveValidate}
        onSubmit={onSubmit}
      >
        <div style={{ paddingLeft: 12 }}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </MForm>
    </div>
  );
};

export default Form;
