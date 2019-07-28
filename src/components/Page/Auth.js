import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from "assets/img/logo.png";
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import authStyle from '../../assets/jss/material-dashboard-react/views/authStyle';

const Auth = (props) => {
    const classes = authStyle();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Card>
                <CardHeader color="danger">
                    <Typography component="h1" variant="h5"> {props.title} </Typography>
                </CardHeader>
                <CardBody>
                    <div className={classes.paper}>
                        <Avatar src={logo} className={classes.bigAvatar} />
                        {props.children}
                        {props.extras || null}
                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Auth;
