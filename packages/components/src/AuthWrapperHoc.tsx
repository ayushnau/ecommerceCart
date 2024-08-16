"use client";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthWrapperHoc: React.FC<{ children: any }> = ({ children }) => {
  const accessToken = useSelector((state: any) => state?.user?.accessToken);
  console.log({ accessToken });
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return children;
};

export default AuthWrapperHoc;
