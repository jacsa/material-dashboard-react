import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import withStyles from "@material-ui/core/styles/withStyles";
import Edit from './component/Edit';
import Create from './component/Create';

const styles = theme => ({
    field: {},
    formButtons: {},
    root: {},
  });

const Form = ({ match: { params } }) => {
    if(params.id != null)
        return <Edit id={parseInt(params.id)} />
    else
        return <Create  />
};

Form.propTypes = {
    classes : PropTypes.any
};

export default compose(withStyles(styles),withRouter)(Form);

