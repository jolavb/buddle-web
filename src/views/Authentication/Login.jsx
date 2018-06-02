
import React from "react";
import { Redirect } from 'react-router-dom';

// material-ui components
import InputAdornment from "material-ui/Input/InputAdornment";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";

//Components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

//Style
import withStyles from "material-ui/styles/withStyles";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

//Assets
import image from "assets/img/AuthenticationBackground.jpg";

import { login, register, getCredentials, isLoggedIn } from "API/Authentication";

// const auth = require('../../API/Authentication')

class Login extends React.Component {

  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: "",
      passwordConfirmation:"",
      renderRegister: false
    };
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  handleLogin = () => {
    const {email, password } = this.state;
    login(email, password)
      .then(()=>{
        this.props.history.push('/')
      })
      .catch(console.log)
  }

  handleRegister = () => {
    const {email, password, passwordConfirmation } = this.state
    register(email, password, passwordConfirmation)
      .then(console.log)
  }

  toggleRegister = (bool) => {
    this.setState({renderRegister: !this.state.renderRegister})
  }
  renderRedirect = () => {
    if(isLoggedIn()) {
      return (<Redirect to='/' />)
    }
  }

  render() {

    const register = () => {
      return (
        <form className={classes.form}>
        <CardHeader color="primary" className={classes.cardHeader}>
          <h4>Register</h4>
        </CardHeader>
          <CardBody>
            <CustomInput
              labelText="Email..."
              id="email"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (e) => {this.setState({email: e.target.value})},
                value: email,
                type: "email",
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor}/>
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Password"
              id="pass"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (e)=> { this.setState({password: e.target.value})},
                value: password,
                type: "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOutline className={classes.inputIconsColor}/>
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Password Confirmation"
              id="pass"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (e)=> { this.setState({passwordConfirmation: e.target.value})},
                value: passwordConfirmation,
                type: "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOutline className={classes.inputIconsColor}/>
                  </InputAdornment>
                )
              }}
            />
          </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button
          onClick={this.toggleRegister}
          round color="primary" size="sm">
            Back to Login
          </Button>
          <Button onClick={this.handleRegister} round color="primary" size="sm">
            Register
          </Button>
        </CardFooter>
        </form>
      )
    }

    const login = () => {
      return (
        <form className={classes.form}>
        <CardHeader color="primary" className={classes.cardHeader}>
          <h4>Login</h4>
        </CardHeader>
          <CardBody>
            <CustomInput
              labelText="Email..."
              id="email"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (e) => {this.setState({email: e.target.value})},
                value: email,
                type: "email",
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor}/>
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Password"
              id="pass"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                onChange: (e)=> { this.setState({password: e.target.value})},
                value: password,
                type: "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <LockOutline className={classes.inputIconsColor}/>
                  </InputAdornment>
                )
              }}
            />
          </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button
          onClick={this.handleLogin}
          round color="primary" size="sm">
            Login
          </Button>
          <Button onClick={this.toggleRegister} round color="primary" size="sm">
            Register
          </Button>
        </CardFooter>
        </form>
      )
    }

    const { classes, ...rest } = this.props;
    const { email, password, renderRegister, passwordConfirmation  } = this.state;

    return (
      <div>
        {this.renderRedirect()}
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />

        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>

                {renderRegister ? register() :  login() }

                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer whiteFont />
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(Login);
