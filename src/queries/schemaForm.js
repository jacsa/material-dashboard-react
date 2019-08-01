import { gql } from "apollo-boost";

interface CreateSchemaFormInput {
    name: String,
    schema: String,
    uischema:String,
    columns:String,
    estatus: Boolean
  }

  interface UpdateSchemaFormInput {
    id: Int,
    name: String,
    schema: String,
    uischema:String,
    columns:String,
    estatus: Boolean
  }

  interface DeleteSchemaFormInput {
    id: Int
  }

const GET_SCHEMA_FORM_COLUMNS_BY_NAME = gql`
    query schemaForm($name: String) {
        schemaForm(name: $name) {
            id
            columns
        }
    }`;

const GET_SCHEMA_FORM_SCHEMA_BY_NAME = gql`
query schemaForm($name: String) {
    schemaForm(name: $name) {
        id
        schema
    }
}`;

const GET_SCHEMA_FORM_UI_SCHEMA_BY_NAME = gql`
query schemaForm($name: String) {
    schemaForm(name: $name) {
        id
        uischema
    }
}`;

const GET_SCHEMA_FORM_BY_NAME = gql`
query schemaForm($name: String) {
    schemaForm(name: $name) {
        id
        name  
        schema
        uischema
        columns
        estatus
    }
}`;

const GET_ALL_SCHEMA_FORM = gql`
    query {
        schemaForms {
            id
            name  
            estatus
    }
}`;

const ADD_SCHEMA_FORM = gql`
 mutation AddSchemaForm($input: CreateSchemaFormInput) {
    addSchemaForm(input: $input ) {
        id
    }
}`;

const UPDATE_SCHEMA_FORM = gql` 
mutation updateSchemaForm( $input: UpdateSchemaFormInput, $id:Int) {
     updateSchemaForm(input: $input, id:$id ) {
        id
    }
}`;


const DELETE_SCHEMA_FORM = gql`
  mutation deleteSchemaForm($input: DeleteSchemaFormInput!) {
    deleteSchemaForm(input: $input){
        id
    }
}`;

export {
    GET_SCHEMA_FORM_COLUMNS_BY_NAME,
    GET_SCHEMA_FORM_SCHEMA_BY_NAME,
    GET_SCHEMA_FORM_UI_SCHEMA_BY_NAME,
    GET_SCHEMA_FORM_BY_NAME,
    GET_ALL_SCHEMA_FORM,
    ADD_SCHEMA_FORM,
    UPDATE_SCHEMA_FORM,
    DELETE_SCHEMA_FORM
};