import { gql } from "apollo-boost";

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
        schemaForm {
            id
            name  
            schema
            uischema
            columns
            estatus
    }
}`;

export {
    GET_SCHEMA_FORM_COLUMNS_BY_NAME,
    GET_SCHEMA_FORM_SCHEMA_BY_NAME,
    GET_SCHEMA_FORM_UI_SCHEMA_BY_NAME,
    GET_SCHEMA_FORM_BY_NAME,
    GET_ALL_SCHEMA_FORM
};