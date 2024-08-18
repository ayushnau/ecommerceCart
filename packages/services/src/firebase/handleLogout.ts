import { getAuth, signOut } from "firebase/auth";

export const handleLogout = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Error signing out: ", error);
    throw error;
  }
};
