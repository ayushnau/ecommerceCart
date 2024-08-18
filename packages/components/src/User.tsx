// pages/profile.js
"use client";
import { useEffect, useState } from "react";
import { auth, db, doc, getDoc } from "services";
import { useRouter } from "next/navigation";
import React from "react";

const Profile = () => {
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      console.log({ user });
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap: any = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        router.push("/login");
      }
    };

    fetchUserData();
  }, [router]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
      <img src={userData.profilePicture} alt="Profile" />
    </div>
  );
};

export default Profile;
