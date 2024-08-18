import { auth, db, doc, getDoc } from "services";
import { useRouter } from "next/navigation";

export const getUserData = async () => {
  try {
    const user = auth.currentUser;
    
    if (!user) {
      console.log("Not signed in");
      return {success: false}
    }

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error("No such document!");
    }

    return docSnap.data();
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
