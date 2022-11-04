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

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDz8q_-2vTkltQ62IM4KIUdnakyKvogvyo',
  authDomain: 'expense-tracker-44a63.firebaseapp.com',
  projectId: 'expense-tracker-44a63',
  storageBucket: 'expense-tracker-44a63.appspot.com',
  messagingSenderId: '351677709823',
  appId: '1:351677709823:web:f68693193a863f1b587bca',
  measurementId: 'G-CZ6XST7KRV',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
