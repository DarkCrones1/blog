import { LoginRequestDto } from "@/dtos/request/LoginRequestDto";

export const PostLogin = async (
  formData: LoginRequestDto
): Promise<string | null> => {
  try {
    const response = await fetch("http://localhost:5162/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const token = data.token;

    if (token) {
      localStorage.setItem("token", token);
    }

    return token;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};
