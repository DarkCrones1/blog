import { UserAccountCreateRequestDto } from "@/dtos/request/create/UserAccountCreateRequestDto";
import { APIResponse } from "@/dtos/response/ApiResponse";
import { UserAccountResponseDto } from "@/dtos/response/UserAccountResponseDto";

export const PostUserAccount = async (
  formData: UserAccountCreateRequestDto
): Promise<void> => {
  try {
    const response = await fetch("http://localhost:5162/api/UserAccount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: APIResponse<UserAccountResponseDto> = await response.json();
  } catch (error) {
    console.error("Error al crear una publicación:", error);
    throw error;
  }
};
