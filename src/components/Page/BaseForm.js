import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import baseStyles from '../../assets/jss/material-dashboard-react/views/baseFormStyle';

const BaseForm = (props) => {
    const classes = baseStyles();
    return (
        <Container component="main" maxWidth="xl">
            <CssBaseline />
            <Card>
                <CardBody>
                    <div className={classes.paper}>
                        {props.children}
                        {props.extras || null}
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default BaseForm;
