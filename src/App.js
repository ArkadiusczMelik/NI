import ray from './img/ray.svg';
import './App.css';
import  ReactDOM from 'react-dom';
import { Amplify, Hub,Auth } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator,useAuthenticator,Authenticator, useTheme, View, Image, Text, Heading, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './login.css';
import './index.css';
import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoinPage from './pages/CoinPage';
import {BrowserRouter,Route, Router, Routes} from "react-router-dom";
import { makeStyles, withTheme } from '@mui/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import awsConfig from './aws-exports';

Auth.configure(awsExports);


const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; All Rights Reserved 2023
        </Text>
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account NI
        </Heading>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};


function App() {
  
  



const useStyles=makeStyles(()=>({
App:{

  backgroundColor:"#14161a",

  color:"white",
  minHeight:"100vh",

},
}));

const classes = useStyles();
  return (
  
    <Authenticator formFields={formFields} components={components}>
    {({ signOut}) => (
  <BrowserRouter>

  <div className={classes.App}>

    <Header logOut ={signOut}/>
    <Routes>
    <Route path="/" element={<HomePage/>} exact/>
    <Route path="/coins/:id" element={<CoinPage/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  )}
  </Authenticator>

  );
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ray} className="App-logo" alt="ray" />
        <p>
          Welcome to best analytics platform in crypto world!
        </p>
        <button
          className="App-link"
          href="markup/login.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a href='markup/login.html'>
           
          </a>
        </button>
      </header>
    </div>
  );
}*/


/*
 <Authenticator socialProviders={['google']}>
    {({ signOut}) => (
  <BrowserRouter>
  <div className={classes.App}>

    <Header logOut ={signOut}/>
    <Routes>
    <Route path="/" element={<HomePage/>} exact/>
    <Route path="/coins/:id" element={<CoinPage/>}/>
    </Routes>
  </div>
  </BrowserRouter>
  )}
  </Authenticator>
*/ 

export default withAuthenticator(App);
