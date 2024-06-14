import { CommentaryUpdateRequestDto } from "../../dtos/request/update/CommentaryUpdateRequestDto";
import { APIResponse } from "../../dtos/response/ApiResponse";
import { CommentaryResponseDto } from "../../dtos/response/CommentaryResponseDto";

const token = localStorage.getItem("token");

export async function PutCommentary({
  Id,
  formData,
}: {
  Id: number;
  formData: CommentaryUpdateRequestDto;
}): Promise<CommentaryUpdateRequestDto> {
  try {
    const response = await fetch(`http://localhost:5162/api/Commentary/${Id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    const data: APIResponse<CommentaryResponseDto> = await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
    throw error;
  }
}
