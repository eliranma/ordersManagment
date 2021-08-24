import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDWmq2e2G45fN1p3Q0qTj2sMPdzfoWqc98",
    authDomain: "order-managment-a.firebaseapp.com",
    projectId: "order-managment-a",
    databaseURL:"https://order-managment-a-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "order-managment-a.appspot.com",
    messagingSenderId: "560650612563",
    appId: "1:560650612563:web:002b24f6d036b1675d3ba6"
  };


firebase.initializeApp(firebaseConfig);

// export const createUserProfileDocument = async  (userAuth, additionalData) => {
//   if (!userAuth) return;
//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const {displayName, email, photoURL} = userAuth;
//     const createdAt = new Date();
//     try{
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         photoURL,
//         ...additionalData
//       });
//     } catch (error){
//       console.log('error catching user', error.message);
//     }
//   }
//   return userRef;
// };



export const addCollectionAndDocuments = async (
  collectionKey, objectsToAdd
  ) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
   batch.set(newDocRef, obj);
  });
 return await batch.commit()
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const liveOrders = doc.data();
    return {
      liveOrders
    };
  });
return transformedCollection.reduce((accumulator, collection) => {
  accumulator[collection.title.toLowerCase()] = collection;
  return accumulator;
}, {});
};

export const getCurrentUser = ()=> {
  return new Promise((reslove, reject)=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      reslove(userAuth);
    }, reject);
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;