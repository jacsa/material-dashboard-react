import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import Edit from './component/Edit';
import Create from './component/Create';
import BaseForm from '../../components/Page/BaseForm';

const Form = ({ match: { params } }) => {
    return (<BaseForm>
         {params.id != null ? <Edit id={parseInt(params.id)} /> : <Create />}
        </BaseForm>
    )
};
export default compose(withRouter)(Form);
