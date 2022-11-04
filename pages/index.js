/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  Typography,
} from '@mui/material';
import { auth } from '../firebase/firebase';
import styles from '../styles/landing.module.scss'; //configure FirebaseUi
  const uiConfig = {
    signInFlow: 'popup', //signIn with popup rather
    signInSuccessUrl: REDIRECT_PAGE,
    signInOptions: [
      //can be Google, Facebook, Twitter, Github, Email / password
      EmailAuthProvider.PROVIDER_ID,
      GoogleAuthProvider.PROVIDER_ID,
      GithubAuthProvider.PROVIDER_ID,
      FacebookAuthProvider.PROVIDER_ID,
    ],
  };

export default function Home() {
  const router = useRouter()
   const [login, setLogin] = useState(false)   
  
  
  return (
    <div>
      <Head>
        <title>Expense Tracker</title>
      </Head>

      <main>
        <nav className={styles.nav1}>
          <span>We Help. We Educate. We Give Hope.</span>{' '}
          <span>Contact Us</span>{' '}
        </nav>
        <section className={styles.hero}>
          <Container className={styles.container}>
            <Typography variant='h1' className={styles.typo}>
              Welcome to Expense Tracker!
            </Typography>
            <Typography variant='h2' className={styles.typo}>
              Add, view, edit, and delete expenses
            </Typography>
            <div className={styles.buttons}>
              <Button onclick variant='contained' color='secondary'>
                Login / Register
              </Button>
            </div>
            <Dialog open={login}>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={auth}
              ></StyledFirebaseAuth>
            </Dialog>
          </Container>
        </section>
      </main>
    </div>
  );
}
