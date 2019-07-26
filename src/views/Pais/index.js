import React from 'react'
import List from './List';
import { compose } from 'recompose';
import { withAuthorization } from '../../components/Session';
import withStyles from "@material-ui/core/styles/withStyles";

const Pais = () => {
    return (
        <div>
            <List />
        </div>
    )
}
const condition = authUser => !!authUser;
export default compose(
  withAuthorization(condition)
)(Pais);
//export default Pais;
