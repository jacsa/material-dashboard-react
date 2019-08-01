import React from 'react'
import List from './List';
import { compose } from 'recompose';
import { withAuthorization } from '../../components/Session';

const Pais = () => <List />;

const condition = authUser => !!authUser;
export default compose(
  withAuthorization(condition)
)(Pais);

