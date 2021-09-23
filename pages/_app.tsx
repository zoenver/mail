import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Footer from '../components/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import { Pane, Alert } from 'evergreen-ui';
import "../lib/hoagie-ui/theme.css"
import "./mail.css"
import './quill.snow.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
        <Head>
        <title>Mail by Hoagie</title>
      </Head>
      <Theme>
      <Layout name="mail">
      <Pane
          display="flex"
          width="100%"
          justifyContent="center"
        >
          <Alert
            intent="danger"
            marginY={10}
            width="500px"
            marginBottom="-30px"
            >
          <b>Effective immediately: New content rules.</b><br></br>
           According to our survey, majority of students do not want to receive emails about lost/found and items you are selling. Until we implement a digest system, <b>you SHOULD NOT use Hoagie Mail to send emails about lost items and items you are selling</b>. Violation of this rule will result
           in a ban.
        </Alert>
        </Pane>
      <Component {...pageProps} />
      <Footer />
      </Layout>
      </Theme>
    </UserProvider>
  );
}