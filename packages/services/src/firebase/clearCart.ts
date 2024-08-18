// services/firestore.ts
import { getFirestore, collection, doc, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Import your firebase app config

export const clearCart = async (userId: string) => {
  try {
    // Reference to the cart subcollection
    const cartRef = collection(db, "users", userId, "cart");

    // Get all cart items
    const querySnapshot = await getDocs(cartRef);

    // Delete each cart item
    for (const docSnapshot of querySnapshot.docs) {
      await deleteDoc(docSnapshot.ref);
    }

    console.log("Cart cleared successfully");
  } catch (error) {
    console.error("Error clearing cart in Firestore: ", error);
  }
};
