// services/cartService.ts
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const getCartItems = async (userId: string) => {
  try {
    const cartCollectionRef = collection(db, "users", userId, "cart");
    const cartSnapshot = await getDocs(cartCollectionRef);
    const cartItems = cartSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return cartItems.length > 0 ? cartItems : null;
  } catch (error) {
    console.error("Error fetching cart items from Firestore: ", error);
    return null;
  }
};
