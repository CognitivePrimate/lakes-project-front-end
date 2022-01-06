// TEST -- google says to require the following modules within source files
var firebase = require('firebase');
var firebaseui = require('firebaseui');

// TEST

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

const SignInPage = () => {

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Other config options...

        // Is there an email link sign-in?
        if (ui.isPendingRedirect()) {
            ui.start('#firebaseui-auth-container', uiConfig);
        }
        // This can also be done via:
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    });

    
}

export default SignInPage;