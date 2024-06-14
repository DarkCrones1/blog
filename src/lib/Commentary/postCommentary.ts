import { CommentaryCreateRequestDto } from "../../dtos/request/create/CommentaryCreateRequestDto";
import { APIResponse } from "../../dtos/response/ApiResponse";
import { CommentaryResponseDto } from "../../dtos/response/CommentaryResponseDto";

const token = localStorage.getItem("token");

export async function PostCommentary(
  formData: CommentaryCreateRequestDto
): Promise<CommentaryCreateRequestDto> {
  try {
    const response = await fetch("http://localhost:5162/api/Commentary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data: APIResponse<CommentaryResponseDto> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al crear una publicación:", error);
    throw error;
  }
}
