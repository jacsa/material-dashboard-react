import React from 'react'
import { ADD_SCHEMA_FORM } from '../../../queries/schemaForm';
import Apollo from '../../../components/Apollo';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import MForm from "../../../components/FormGenerationEngine";
import LayoutField from "../../../components/GridField/layoutField";
import Fab from '@material-ui/core/Fab';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpIcon from '@material-ui/icons/ArrowUpward';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue, deepPurple  } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary:deepPurple
    },
});

function ArrayFieldTemplate(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            {props.canAdd &&
                <ThemeProvider theme={theme}>
                    <Fab color="primary" size="small" aria-label="add" onClick={props.onAddClick}>
                        <AddIcon />
                    </Fab>
                </ThemeProvider>}

            {props.items.map(element => {
                return (
                    <>
                    <Grid container spacing={1}>
                        <Grid item xs={10}>
                            {element.children}
                        </Grid>
                        <Grid item>
                            {(element.hasMoveUp || element.hasMoveDown) &&
                                <ThemeProvider theme={theme}>
                                    <Fab color="primary" tabIndex="-1" size="small" aria-label="remove"
                                        disabled={element.disabled || element.readonly || !element.hasMoveUp}
                                        onClick={element.onReorderClick(element.index, element.index - 1)} >
                                        <ArrowUpIcon />
                                    </Fab>
                                </ThemeProvider>
                            }
                        </Grid>
                        <Grid item>
                            {(element.hasMoveUp || element.hasMoveDown) &&
                                <ThemeProvider theme={theme}>
                                    <Fab color="secondary" size="small" aria-label="remove"
                                        tabIndex="-1"
                                        disabled={element.disabled || element.readonly || !element.hasMoveDown}
                                        onClick={element.onReorderClick(element.index, element.index + 1)} >
                                        <ArrowDownIcon />
                                    </Fab>
                                </ThemeProvider>
                            }
                        </Grid>
                        <Grid item>
                            {element.hasRemove && <Fab color="primary" size="small" aria-label="remove" onClick={element.onDropIndexClick(element.index)} >
                                <DeleteIcon />
                            </Fab>
                            }
                        </Grid>
                    </Grid>
                    <hr/>
                    </>
                )
            })}

        </div>
    );
}

const fields = {
    layout: LayoutField
}
const schemaForm = {
    schema: {
        definitions: {
            Widget : {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        enum: [
                            "checkbox",
                            "color",
                            "hidden",
                            "radio",
                            "range",
                            "select",
                            "text",
                            "textarea",
                            "updown"
                        ]
                    }
                },
                dependencies : {
                    name : {
                        oneOf: [{
                            properties: {
                                name: {
                                    enum: [
                                        "select"
                                    ]
                                },
                                enum: { 
                                        type: "array",
                                        title:"Content",
                                        items: {
                                            "$ref": "#/definitions/Content"
                                        }
                                }
                            },
                            required: [
                                "enum"
                              ]
                        },
                        {
                            properties: {
                                name: {
                                    enum: [
                                        "checkbox"
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                name: {
                                    enum: [
                                        "color"
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                name: {
                                    enum: [
                                        "hidden"
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                name: {
                                    enum: [
                                        "radio"
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                name: {
                                    enum: [
                                        "range"
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                name: {
                                    enum: [
                                        "text"
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                name: {
                                    enum: [
                                        "textarea"
                                    ]
                                }
                            }
                        },
                        {
                            properties: {
                                name: {
                                    enum: [
                                        "updown"
                                    ]
                                }
                            }
                        }
                     ]
                    }
                }
            },
            Content: {
                type: "object",
                properties: {
                    text : { type : "string", title:'Text' },                        
                    value :{ type : "string", title:'Value' }
                }
            },
            Row: {
                src: "https://spacetelescope.github.io/understanding-json-schema/reference/object.html#dependencies",
                type: "object",
                properties: {
                    name: { type: "string", title: "Name" },
                    title: { type: "string", title: "Title" },
                    type: {
                        default: "string",
                        title: "Type",
                        type: "string",
                        enum: [
                            "boolean",
                            "enum",
                            "date",
                            "number",
                            "string"
                        ]
                    },
                    widget: {
                        title: "",
                        default: "text",
                        type: "object",
                        "$ref": "#/definitions/Widget"
                        //  enum: [
                        //     "checkbox",
                        //     "color",
                        //     "hidden",
                        //     "radio",
                        //     "range",
                        //     "select",
                        //     "text",
                        //     "textarea",
                        //     "updown"]
                    },
                    max: { type: "number", title: "Max", format: "number" },
                    min: { type: "number", title: "Min", format: "number" },
                    column : { type: "boolean", default: false, title:'Column' },
                    // enum:{ 
                    //     type: "array",
                    //     title:"Content",
                    //     items: {
                    //         "$ref": "#/definitions/Content"
                    //     }
                    // },
                    required: { type: "boolean", default: false }
                }
            }
        },
        type: "object",
        title: "Form",
        properties: {
            name: { type: "string", title: "Name" },
            status: { type: "boolean" },
            rows: {
                type: "array",
                title: "Detail",
                minItems: 1,
                items: {
                    "$ref": "#/definitions/Row"
                }
            },
        }
    },
    uischema: {
        "rows": {
            "items": {
                "required": {
                    "ui:widget": "checkbox"
                },
                'ui:field': 'layout',
                'ui:layout': [{
                    name: { md: 2 },
                    title: { md: 2 },
                    type: { md: 2 },
                    widget: { md: 2 },
                    // enum: { md: 2 },
                    max: { md: 1 },
                    min: { md: 1 },
                    column: {  },
                    required: { }
                }
                ]
            }
        },

    }
};

const onError = (errors) => console.log("I have", errors.length, "errors to fix");
const Create = ({ history, match: { params } }) => {
    return (
        <Apollo.DefaultMutation mutation={ADD_SCHEMA_FORM} onCompleted={(info) => {
            history.push('/admin/schemaForm');
        }} >
            {({ mutationAction }) => {
                return <MForm id="id"
                    noHtml5Validate
                    schema={schemaForm.schema}
                    uiSchema={schemaForm.uischema}
                    showErrorList={false}
                    liveValidate
                    onError={onError}
                    fields={fields}
                    ArrayFieldTemplate={ArrayFieldTemplate}
                    onCancel={(e) => { e.preventDefault(); history.push('/admin/schemaForm'); }}
                    onSubmit={({ formData }, e) => {
                        //debugger;
                        console.log(formData);
                    }}
                />
            }}
        </Apollo.DefaultMutation>
    )
}



export default compose(withRouter)(Create);
