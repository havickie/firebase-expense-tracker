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

import { createContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useState } from 'react';
import { useContext } from 'react';

const AuthUserContext = createContext({
  authUser: null, //authenticated user initially at null
  isLoading: true, // is firebase loading or not
});

export default function useFirebaseAuth(){
const [authUser, setAuthUser] = useState(null);
const [isLoading, setIsLoading] = useState(true)
const authStateChanged = async (user) => {
  setIsLoading(true);
  if (!user) {
    setAuthUser(null);
    setIsLoading(false);
    return;
  }
  setAuthUser({
    uid: user.uid,
    email: user.email,
  });
  setIsLoading(false)
 }
 useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth, authStateChanged)
 return() => unsubscribe();
}, [])
return{
 authUser,
 isLoading
}
}


//to enable components to consume the values from the auth user context
export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = ()=> useContext(AuthUserContext) // access the current context value