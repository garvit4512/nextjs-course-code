// import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import LoginForm from '../components/ui/Login';

function TestPage(props) {
  return (
    <Fragment>
      <Head>
        <title>sdgeg</title>
        <meta name='description' content='sdge' />
      </Head>
      <h2>New Login</h2>
      <LoginForm></LoginForm>
    </Fragment>
  );
}

export default TestPage;
