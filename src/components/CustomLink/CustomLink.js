import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types'
const CustomLink = ({to,history}) => {
    return (
        <EditIcon color="primary" onClick={(e) => { history.push(to); }} />
    );
}


CustomLink.propTypes = {
    to:PropTypes.string.isRequired,
    history: PropTypes.object
}

export default CustomLink;