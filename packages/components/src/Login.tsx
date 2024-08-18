"use client";
import React from "react";
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  db,
  doc,
  setDoc,
} from "services";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log({ user });
      // Push user data to Firestore
      const response = await setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
      });
      console.log({ response });

      alert("reached here");
      router.push("/user"); // Redirect to another page after login
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
