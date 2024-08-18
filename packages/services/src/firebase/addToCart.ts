import { getFirestore, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase"; // Import your firebase app config

export const addToCart = async (userId: string, cartItem: any) => {
  try {
    console.log("Attempting to save to Firestore...");
    
    const docRef = doc(db, "users", userId, "cart", `${cartItem.id}`);
    
    // Log the data being saved
    console.log("Saving the following data:", cartItem);
    
    // Set the document in Firestore
    await setDoc(docRef, cartItem);
    
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error updating cart in Firestore: ", error);
    throw (error)
  }
};