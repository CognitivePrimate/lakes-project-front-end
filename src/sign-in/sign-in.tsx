import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';

import { useContext, useState } from 'react';
import { auth } from '../firebaseConfig';

import { AuthContext } from '../context-providers/auth-context';

const SignInPage = () => {
    // instantiate context
    const {signInWithGoogle, register, login, logout} = useContext(AuthContext);

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return(
        <div>
            <div>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>
            <div>
                <h3>Register User</h3>
                <input placeholder='email'/>
                <input placeholder='password'/>

                <button onClick={() => register}>Create User</button>
            </div>

            <div>
                <h3>Login</h3>
                <input placeholder='email'/>
                <input placeholder="password"/>

                <button onClick={() => login}>Login</button>
            </div>
            <h4> User Logged In: </h4>

            <button onClick={logout}>Sign Out</button>
        </div>
    )

    
}

export default SignInPage;