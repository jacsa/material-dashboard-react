import React from 'react';
import { MTableToolbar } from "material-table";
import AddIcon from '@material-ui/icons/Add';

const ToolBarComponent = (props) => {
    return (
        <div>
            <MTableToolbar {...props} />
            <div style={{ padding: '0px 10px' }}>
                <AddIcon onClick={(e) => {
                    e.preventDefault();
                    props.history.push(props.to);
                }} />
            </div>
        </div>)
};

export default ToolBarComponent;