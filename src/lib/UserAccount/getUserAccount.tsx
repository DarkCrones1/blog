import { APIResponse, Meta } from "@/dtos/response/ApiResponse";
import { UserAccountResponseDto } from "@/dtos/response/UserAccountResponseDto";

export const GetUserAccount = async (): Promise<
  APIResponse<UserAccountResponseDto[]>
> => {
  try {
    const response = await fetch(
      "http://localhost:5162/api/UserAccount?IsDeleted=false"
    );
    const data: APIResponse<UserAccountResponseDto[]> = await response.json();
    return data;
  } catch (error) {
    return {
      Data: [],
      Message: `Error al obtener las publicaciones, ${error}}`,
      Meta: {} as Meta,
    };
  }
};
