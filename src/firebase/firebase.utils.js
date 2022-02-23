// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import { getAuth, signOut } from "firebase/auth";
// import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

export const googleSignIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // ...
      return result;
    })
    .catch((error) => {
      // // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // // ...
      console.log(`error code: ${error.code}, error message: ${error.message}`);
    });
};

// export const googleSignIn = () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

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

export const addNewBlog = async (blogData) => {
  const docRef = await addDoc(collection(db, "blogs"), blogData);
  console.log("doccument written with ID: ", docRef.id);
};

export const getAllBlogs = async () => {
  const blogsCol = collection(db, "blogs");
  const blogSnapshot = await getDocs(blogsCol);
  const blogList = blogSnapshot.docs.map((doc) => ({
    id: doc.id,
    blogData: doc.data(),
  }));
  console.log(blogList);
  return blogList;
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
