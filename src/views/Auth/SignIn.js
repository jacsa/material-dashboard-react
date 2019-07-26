import React, { useState } from 'react';
import Page from '../../components/Page';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import authStyle from '../../assets/jss/material-dashboard-react/views/authStyle';
import Button from '@material-ui/core/Button';

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../../components/Firebase';
import PropTypes from 'prop-types';

const SignIn = ({ firebase,history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const classes = authStyle();
    // const extras = <Grid container>
    //             <Grid item xs>
    //                 <Link href="#" variant="body2">
    //                     Forgot password?
    //                             </Link>
    //             </Grid>
    //             <Grid item>
    //                 <Link href="#" variant="body2">
    //                     {"Don't have an account? Sign Up"}
    //                 </Link>
    //             </Grid>
    //         </Grid>;

    const onSubmit = (e) => {
        firebase
        .doSignInWithEmailAndPassword(email, password)
        .then((t) => {
          history.push("/admin/dashboard");
        })
        .catch(err => {
          console.log(err);
        });
  
      e.preventDefault();

    };         
    return (
        <Page.Auth>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="secondary" />}
                    label="Remember me"
                />
                <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit} 
                            onClick={ (e) => onSubmit(e)}
                            >Submit
                            
                </Button>
            </form>
        </Page.Auth>
    )
}

SignIn.propTypes = {
    id: PropTypes.string
};


export default compose(
    withRouter,
    withFirebase,
  )(SignIn);
