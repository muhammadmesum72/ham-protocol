"use client";

import { useState, ChangeEvent } from "react";

interface FormData {
  wallet: string;
  name: string;
  by: string;
  email: string;
}

export function useSignupForm(
  wallet: string,
  referralCode?: string,
  email?: string
) {
  const [formData, setFormData] = useState<FormData>({
    wallet,
    name: "",
    by: referralCode ?? "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return {
    formData,
    handleChange,
  };
}
