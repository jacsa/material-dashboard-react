import React from 'react';
import MaterialTable  from "material-table";
import PropTypes from 'prop-types'


const DataGrid = ({ columns, data, actionComponent, toolBarComponent }) => {
    return (
        <MaterialTable
            title=""
            data={data}
            columns={columns}
            actions={[
                {
                    icon: 'save',
                    tooltip: 'Save User',
                    onClick: (event, rowData) => console.log(rowData),
                    isFreeAction: false
                }
            ]}
            options={{
                actionsColumnIndex: -1
            }}
            components={{
                Action: actionComponent,
                Toolbar: toolBarComponent
            }}
        />
    );
}

DataGrid.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    actionComponent: PropTypes.any,
    toolBarComponent: PropTypes.any
}
export default DataGrid;