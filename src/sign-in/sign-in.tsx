// TEST -- google says to require the following modules within source files
var firebase = require('firebase');
var firebaseui = require('firebaseui');

// TEST

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

const SignInPage = () => {

    ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Other config options...
    });
}

export default SignInPage;