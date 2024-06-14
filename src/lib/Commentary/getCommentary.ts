import { APIResponse, Meta } from "../../dtos/response/ApiResponse";
import { CommentaryResponseDto } from "../../dtos/response/CommentaryResponseDto";

export const GetCommentary = async (
  url: string
): Promise<APIResponse<CommentaryResponseDto[]>> => {
  try {
    const response = await fetch(`http://localhost:5162/api/${url}`);
    const data: APIResponse<CommentaryResponseDto[]> = await response.json();
    return data;
  } catch (error) {
    return {
      Data: [],
      Message: `Error al obtener los comentarios, ${error}`,
      Meta: {} as Meta,
    };
  }
};
