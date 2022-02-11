import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, signOut } from "firebase/auth";

export const googleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const googleSignOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // signout successful
    })
    .catch((error) => {
      console.log(error);
    });
};

// export default { googleSignIn, googleSignOut };
