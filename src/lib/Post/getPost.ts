import { APIResponse, Meta } from "../../dtos/response/ApiResponse";
import { PostResponseDto } from "../../dtos/response/PostResponseDto";

export const GetPost = async (): Promise<APIResponse<PostResponseDto[]>> => {
  try {
    const response = await fetch(
      "http://localhost:5162/api/Post?IsDeleted=false"
    );
    const data: APIResponse<PostResponseDto[]> = await response.json();
    return data;
  } catch (error) {
    return {
      Data: [],
      Message: `Error al obtener las publicaciones, ${error}}`,
      Meta: {} as Meta,
    };
  }
};
