import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
// import firebaseui from 'firebaseui';
import { useState } from 'react';
import { auth } from '../firebaseConfig';

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

const SignInPage = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

        // TODO FIX TYPE FROM OBJECT TO...FIREBASE.USER?
    const [user, setUser] = useState<object | null>({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };
    
    const logout = async () => {
        await signOut(auth)
    };

    return(
        <div>
            <div>
                <h3>Register User</h3>
                <input placeholder='email'/>
                <input placeholder='password'/>

                <button>Create User</button>
            </div>

            <div>
                <h3>Login</h3>
                <input placeholder='email'/>
                <input placeholder="password"/>

                <button>Login</button>
            </div>
            <h4> User Logged In: </h4>

            <button onClick={logout}>Sign Out</button>
        </div>
    )

    
}

export default SignInPage;