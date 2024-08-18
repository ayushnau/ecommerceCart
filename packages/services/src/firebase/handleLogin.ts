import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  db,
  doc,
  setDoc,
} from "./firebase";

  export const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Push user data to Firestore
      const response =  await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
      });
      console.log({response},"asdf");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  }; 
