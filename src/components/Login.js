import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './login.css';

Amplify.configure(awsExports)

function Login() {
 return(
    <Authenticator socialProviders={['facebook', 'google']}>
    {({ signOut, user }) => (
        <main className='login-main'>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
 )
}


export default Login;