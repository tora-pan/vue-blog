import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, signOut } from "firebase/auth";
import "firebase/compat/firestore";
// import { doc, setDoc } from "@firebase/firestore";
// import { doc, setDoc } from "firebase/firestore";
// import { doc, getDoc } from "firebase/firestore";

// import { getFirestore, collection } from "@firebase/firestore";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

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

export const addNewBlog = async () => {
  // const blogData = {
  //   BlogAuthor: "Travis Pandos",
  //   BlogID: 1,
  //   BlogImageURL: "test.png",
  //   BlogText: "This is the first blog text",
  //   BlogTitle: "Blog Title",
  //   // DateCreated: new Date().toISOString().slice(0, 10),
  // };

  const ref = firebase.firestore().collection("blogs");
  ref.get().then((snap) => console.log(snap));

  const test = await db
    .collection("blogs")
    .add({ hahaha: "test" })
    .then(() => {
      console.log("added blog");
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("its working", test);
};
