import './App.css';

import { Amplify } from 'aws-amplify';
import { WithAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App({ signOut, user }) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
            </header>
        </div>
    );
}

const { handler } = require('./lambda');

exports.main = async (event, context) => {
  try {
    const response = await handler(event, context);
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

export default WithAuthenticator(App);
