import { CommentaryResponseDto } from "./CommentaryResponseDto";
import { PostResponseDto } from "./PostResponseDto";

export interface UserAccountDetailResponseDto {
  Id: number;
  UserInfoId: number;
  UserName: string;
  Email: string;
  FullName: string;
  Phone: string;
  CellPhone: string;
  IsDeleted: boolean;
  CreatedDate: Date;
  Commentary: CommentaryResponseDto[];
  Post: PostResponseDto[];
}
