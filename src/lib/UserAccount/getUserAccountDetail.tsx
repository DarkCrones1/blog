import { APIResponse } from "@/dtos/response/ApiResponse";
import { UserAccountDetailResponseDto } from "@/dtos/response/UserAccountDetailResponseDto";

export const GetUserAccountDetail = async ({
  Id,
}: {
  Id: number;
}): Promise<UserAccountDetailResponseDto[]> => {
  try {
    const response = await fetch(`http://localhost:5162/api/UserAccount/${Id}`);
    const data: APIResponse<UserAccountDetailResponseDto[]> =
      await response.json();
    return data.Data;
  } catch (error) {
    console.error("Error al obtener datos de artesanía:", error);
    return [];
  }
};
